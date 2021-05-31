import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

interface TabProps {
  text: string,
  link: string
}

function Tab ({
  text,
  link
}: TabProps) {
const [highlight, setHighlight] = useState({
  left: 0,
  top: 0,
  opacity: 0
});

const moveHighlight = (e: any): void => {
  setHighlight({
    left: e.nativeEvent.layerX - 300,
    top: e.nativeEvent.layerY - 120,
    opacity: 0.7
  })
}

const hideHighlight = (e: any): void => {
  setHighlight({
    left: e.nativeEvent.layerX - 300,
    top: e.nativeEvent.layerY - 120,
    opacity: 0
  })
}

  return (
    <NavLink
      to={`/${link}`}
      exact={true}
      className="tab__link"
      activeClassName="tab__link_is-active"
    >
      <div
        className="tab"
        onMouseMove={moveHighlight}
        onMouseOut={hideHighlight}
      >
        <div
          className="tab__highlight"
          style={highlight}
        />
        {text}
      </div>
    </NavLink>
  );
}

export default Tab;