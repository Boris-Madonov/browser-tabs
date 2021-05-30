import React from 'react';
import './index.css';

interface TabProps {
  text: string,
}

function Tab ({
  text,
}: TabProps) {
  return (
    <div className="tab">
      <div className="tab__highlight" />
      {text}
    </div>
  );
}

export default Tab;