import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

interface TabProps {
  text: string,
  link: string
}

interface HighlightProps {
  left: number,
  top: number,
  opacity: number
}

function Tab({
  text,
  link
}: TabProps) {
  const [highlight, setHighlight] = useState<HighlightProps>({
    left: 0,
    top: 0,
    opacity: 0
  });

  const moveHighlight = (e: React.MouseEvent<HTMLDivElement>): void => {
    setHighlight({
      left: e.nativeEvent.offsetX  - 300,
      top: e.nativeEvent.offsetY  - 120,
      opacity: 0.7
    })
  }

  const hideHighlight = (e: React.MouseEvent<HTMLDivElement>): void => {
    setHighlight({
      left: e.nativeEvent.offsetX  - 300,
      top: e.nativeEvent.offsetY  - 120,
      opacity: 0
    })
  }

  return (
    <div
      className="tab"
      onMouseMove={moveHighlight}
      onMouseOut={hideHighlight}
    >
      <NavLink
        to={`/${link}`}
        exact={true}
        className="tab__link"
        activeClassName="tab__link_is-active"
      >
        <div
          className="tab__highlight"
          style={highlight}
        />
        {text}
      </NavLink>
    </div>
  );
}

export default Tab;