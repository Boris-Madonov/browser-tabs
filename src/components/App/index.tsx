import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tab from '../Tab';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Features from '../../pages/Features';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__browser">
          <div className="app__browser-tabs">
            <Tab
              text="Home"
              link=""
            />
            <Tab
              text="About"
              link="about"
            />
            <Tab
              text="Features"
              link="features"
            />
          </div>
          <div className="app__browser-viewport">
            <Switch>
              <Route
                path="/about"
              >
                <About />
              </Route>
              <Route
                path="/features"
              >
                <Features />
              </Route>
              <Route
                path="/"
                exact={true}
              >
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
