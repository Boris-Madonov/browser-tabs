import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import TabBar from '../TabBar';
import Routers from '../../Routers'
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__browser">
          <TabBar />
          <div className="app__browser-viewport">
            <Routers />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
