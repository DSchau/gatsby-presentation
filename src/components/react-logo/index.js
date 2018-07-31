import React from 'react';
import { Image } from 'spectacle';

import logo from './react.svg';

import './react-logo.css';

export function ReactLogo({ background, showTitle = false }) {
  return (
    <div className="react-logo">
      <Image className="image" src={logo} />
      {showTitle && <h1 className="title">React</h1>}
    </div>
  );
}

ReactLogo.defaultProps = {
  background: false
};
