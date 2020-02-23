import React, { useState, useEffect } from 'react';
import Dummy from './components/dummy';

const compoo = require('./backend/api.json');

function App() {
  const [dumb, renderDummy] = useState();
  return (
    <div className="container">
      <div className="top">
        <h1>Modular React</h1>
      </div>

      <div className="modular-wrapper">
        <Dummy />
      </div>
    </div>
  );
}

export default App;
