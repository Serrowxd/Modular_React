import React, { useState } from 'react';
import Dummy from './components/dummy';

const compoo = require('./backend/api.json');

function App() {
  const [dumb, renderDummy] = useState([]);
  const [newDumb, addNewDumb] = useState({ name: '', link: '' });

  // Components should be fully modular - therefor they should be able to be picked on which is loaded
  // Treat them like users? Pick component, find component in API, pull component, apply logic
  // Dumb state array should hold which modules are being loaded - .push to add new "objects" that contain component logic.

  // Testing

  function newCompoo(bigcompoo) {
    let value = compoo[bigcompoo];
    newDumb.name = value.logic;
    newDumb.link = value.link;
    addNewDumb({ name: value.logic, link: value.link });
    renderDummy([...dumb, newDumb]);

    console.log(dumb);
  }

  return (
    <div className="container">
      <div className="top">
        <h1>Modular React</h1>
        <button className="add" onClick={() => newCompoo('component1')}>
          Comp1
        </button>
        <button className="add" onClick={() => newCompoo('component2')}>
          Comp2
        </button>
        <button className="add" onClick={() => newCompoo('component3')}>
          Comp3
        </button>
      </div>

      {/* Return should return a wrapper that has an href, dummy logic is pulled? */}
      <div className="modular-wrapper">
        {dumb.map((title, i) => {
          return (
            <a href={title.link} key={i} className="dumb-wrap">
              <Dummy name={title.name} key={i} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default App;
