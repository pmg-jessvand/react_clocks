import React, { useState } from 'react';

import { DigitalClock } from './components'
import './App.css';

const App = () => {

  return (
    <div className="App">
        <DigitalClock country="Ghent" utc={2}/>
        <DigitalClock country="Peking" utc={8} />
        <DigitalClock country="Los Angeles" utc={-7}/>
    </div>
  );
}

export default App;
