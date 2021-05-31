import React from 'react';
import Tab from '../Tab';
import './index.css';

function TabBar() {
  return (
    <div className="tab-bar">
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
  );
}

export default TabBar;