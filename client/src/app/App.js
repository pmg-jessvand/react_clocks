import React, { useState } from 'react';

import { DigitalClock, DigitalClockExtended, BinaryClock } from './components'
import './App.css';

const App = () => {

  return (
    <div className="App">
        <DigitalClock country="Ghent" utc={2}/>
        <DigitalClock country="Peking" utc={8} />
        <DigitalClock country="Los Angeles" utc={-7}/>
        <DigitalClockExtended utc ={-7}/>
        <DigitalClockExtended utc ={7}/>
        <BinaryClock />
    </div>
  );
}

export default App;
