import React from 'react';
import './App.scss';

import houseImage from './res/imgs/houseImage.svg'
import addressImage from './res/imgs/addressImage.svg'

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="contentContainer">
          <div className="eventContainer borderContainer">
            <p>Kleingenossenschaftliches Wohnen seit 1984.</p>
            <p>Kontakt: <a href="mailto:genossenschaft@ponsyrus.ch">genossenschaft@ponsyrus.ch</a></p>
          </div>

          <div className="addressContainer">
            <h1>Anwandstrasse 9<br/>8004 Zürich</h1>
          </div>
        </div>

        <div className="backgroundContainer">
          <img className="addressImage" src={ addressImage }/>
          <img className="houseImage" src={ houseImage }/>
        </div>
      </div>
    </div>
  );
}

export default App;
