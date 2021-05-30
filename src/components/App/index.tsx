import React from 'react';
import Tab from '../Tab';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="app__browser">
        <div className="app__browser-tabs">
          <Tab
            text="Home"
          />
          <Tab
            text="About"
          />
          <Tab
            text="Features"
          />
        </div>
        <div className="app__browser-viewport">
          Pages Go Here
        </div>
      </div>
    </div>
  );
}

export default App;
