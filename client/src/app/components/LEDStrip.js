import React from 'react';

import LED from './LED';

const LEDStrip = ({ amount = 1, v = 2 }) => {

  const toBits = (input, n) => {
    input = String(input);
    while (input.length < n) {
      input = `0${input}`;
    }
    return input;
  }

  const binaryValueString = Number(v).toString(2);
  const binaryValue = toBits(binaryValueString, amount);

  const leds = [];
  for (let i = 0; i < amount; i++) {
    leds.push(<LED key={i} isOn={binaryValue !== null ? (binaryValue[i] === '1' ? true : false) : (false)}/>);
  }

  return (
    <div className="led-strip">
      {leds}
    </div>
  );
};

export default LEDStrip;