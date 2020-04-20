import React, { useState } from 'react';

import './digitalClock.css';


const DigitalClock = ({ country, utc }) => {
  const [time, setTime] = useState('00:00:00');

  const convertTimeToString = (t) => {
    const date = new Date(t);
    date.setUTCHours(date.getUTCHours() + utc)
    const h = date.getUTCHours();
    const m = date.getUTCMinutes();
    const s = date.getSeconds();
    return `${h}:${toBits(m, 2)}:${toBits(s,2)}`;
  }

  const toBits = (input, n) => {
    input = String(input);
    while (input.length < n) {
      input = `0${input}`;
    }
    return input;
  }

  const tick = () => {
    // console.log('clock ticked');
    const t = new Date().getTime();
    setTime(convertTimeToString(t));
  };

  setInterval(() => tick(), 50);

  return (
    <div className="digital-clock">
      <div className="country">{country}</div>
      <div className="time">{time}</div>
    </div>
  )
};

export default DigitalClock;