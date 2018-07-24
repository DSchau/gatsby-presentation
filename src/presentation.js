import React, { Component } from 'react';

import { Deck } from 'spectacle';
import 'prismjs/components/prism-typescript';
import Particles from '@dschau/particles.js';

import createHistory from 'history/createBrowserHistory';
import createTheme from 'spectacle/lib/themes/default';
import makeSlides from './slides';
import particlesConfig from './particles-config';

// Require CSS
require('normalize.css');
require('./index.css');

const theme = createTheme(
  {
    primary: '#0A1C28',
    secondary: '#3FB4C6',
    tertiary: '#F35B05',
    quartenary: '#F1E4DB'
  },
  {
    primary: {
      googleFont: true,
      name: 'Bitter',
      styles: ['400', '700']
    },
    secondary: 'Helvetica'
  }
);

export default class Presentation extends Component {
  componentDidMount() {
    this.history = createHistory();

    this.history.listen(() => {
      this.addParticles();
    });
    
    this.addParticles();
  }

  addParticles(hash = window.location.hash) {
    requestAnimationFrame(() => {
      const [,slideHash] = hash.split('/');
      if (!slideHash || slideHash === '0') {
        document.querySelector('.spectacle-slide').id = 'spectacle-slide';
        Particles('spectacle-slide', particlesConfig);
      } 
    });
  }

  render() {
    return (
      <Deck
        progress="bar"
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        {makeSlides()}
      </Deck>
    );
  }
}
