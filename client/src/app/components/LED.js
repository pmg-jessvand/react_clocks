import React from 'react';

const LED = ({isOn = false}) => {
  return (
    <div className={(isOn) ? 'led led--ison' : 'led'}></div>
  );
}

export default LED;