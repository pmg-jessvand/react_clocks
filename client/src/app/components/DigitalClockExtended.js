import React, { useState } from 'react';

import Digit from './Digit';

import './DigitalClockExtended.css';

const DigitalClockExtended = ({utc = 2}) => {
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

  const tick = () => {
    const t = new Date().getTime();
    setTime(convertTimeToString(t));
  };

  setInterval(() => tick(), 500);

  return (
    <div className="digital-clock-extended">
      <Digit v={time.split(':')[0][0]} />
      <Digit v={time.split(':')[0][1]} />
      <Digit v={time.split(':')[1][0]} />
      <Digit v={time.split(':')[1][1]} />
      <Digit v={time.split(':')[2][0]} />
      <Digit v={time.split(':')[2][1]} />
    </div>
  );
};

export default DigitalClockExtended;