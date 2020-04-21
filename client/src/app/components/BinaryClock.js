import React, { useState, useEffect } from 'react';
import LEDStrip from './LEDStrip';

import './BinaryClock.css';
const BinaryClock = ({ utc = 2 }) => {
  const [time, setTime] = useState('00:00:00');

  const convertTimeToString = (t) => {
    const date = new Date(t);
    date.setUTCHours(date.getUTCHours() + utc);
    const h = date.getUTCHours();
    const m = date.getUTCMinutes();
    const s = date.getUTCSeconds();

    return `${toBits(h, 2)}:${toBits(m, 2)}:${toBits(s, 2)}`;
  };

  const toBits = (input, n) => {
    input = String(input);
    while (input.length < n) {
      input = `0${input}`;
    }
    return input;
  };


  useEffect(() => {
    const tick = () => {
      const t = new Date().getTime();
      setTime(convertTimeToString(t));
    };
    const timerId = setInterval(() => tick(), 500);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="binary-clock">
      <LEDStrip amount ={2} v={time.split(':')[0][0]}/>
      <LEDStrip amount ={4} v={time.split(':')[0][1]}/>
      <LEDStrip amount ={3} v={time.split(':')[1][0]}/>
      <LEDStrip amount ={4} v={time.split(':')[1][1]}/>
      <LEDStrip amount ={3} v={time.split(':')[2][0]}/>
      <LEDStrip amount ={4} v={time.split(':')[2][1]}/>
    </div>
  );
};

export default BinaryClock;