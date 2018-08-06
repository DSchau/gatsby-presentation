import React from 'react';
import Player from 'react-player';
import styled from 'react-emotion';

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Quote,
  Heading,
  Fill,
  Image,
  Layout,
  Link,
  S as Span
} from 'spectacle';

import './index.css';

export const Intro = () => (
  <div>
    <Heading size={2} caps fit>OK. Great!</Heading>
    <Heading size={1} caps fit><Span type="italic">Why?</Span></Heading>
  </div>
);

export const BlazingByDefault = () => (
  <div>
    <Heading size={2} caps fit>Blazing fast</Heading>
    <Heading size={2} caps>by</Heading>
    <Heading size={2} caps fit textColor="white">default</Heading>
  </div>
);

BlazingByDefault.Props = {
  bgImage: require('./images/blazing-optimized.jpg'),
  bgDarken: 0.5
};

export const LighthouseLogo = () => (
  <Image src={require('./images/lighthouse-logo-optimized.png')} />
);

LighthouseLogo.Props = {
  bgColor: '#304ffe'
};

export const PerfScores = () => (
  <Image src={require('./images/lighthouse-optimized.png')} />
);

PerfScores.Props = {
  bgColor: '#242424'
};

export const How = () => (
  <div>
    <Heading size={1} caps fit textColor="white">How?</Heading>
    <Heading size={3} caps fit textColor="secondary"><Span type="italic">aka why is Gatsby so fast?</Span></Heading>
  </div>
);

export const ReasonCodeSplitting = () => (
  <Heading size={2} caps fit>Route-based code splitting</Heading>
);

export const RouteExample = () => (
  <CodePane lang="markup" source={`
src/
  pages/
    about.js
    contact.js
    index.js
  `.trim()} textSize={32} textColor="white" />
);

RouteExample.Props = {
  bgColor: 'code'
};

export const InlineCriticalResources = () => (
  <Heading size={2} caps fit>Inlining of Critical Resources</Heading>
);

export const HeadTags = () => (
  <CodePane lang="markup" source={`
<head>
 <link rel="preload" src="/scripts/1234asdf.js" />
 <link rel="preload" src="/scripts/5678ghij.js" />
</head>
  `.trim()} textSize={32} />
);

HeadTags.Props = {
  bgColor: 'code'
};

export const BallerImages = () => (
  <div>
    {
      ['Simple', 'Performant']
        .map(word => (
          <Heading size={1} caps fit key={word}>{word}</Heading>
        ))
    }
    <Heading size={2} caps fit>Image Optimizations</Heading>
  </div>
);

export const SvgBlur = () => (
  <Player url={require('./video/svg-blur.mp4')} height="100%" width="100%" playing={true} loop={true} />
);

SvgBlur.Props = {
  bgColor: '#000'
};

// TODO: add svg blur-up animation

// TODO: add svg blur up for people

export const GatsbyImage = () => (
  <div>
    <Heading size={1} fit>gatsby-image</Heading>
    <Heading size={2}><Span type="italic" textFont="Baskerville">&amp;</Span></Heading>
    <Heading size={1} fit>graphql</Heading>
  </div>
);

export const GraphQL = () => (
  <div>
    <Heading size={1} fit caps>Yup</Heading>
    <Heading size={2} fit caps>GraphQL</Heading>
  </div>
);

// TODO: add GraphiQL example

const Canvas = styled('canvas')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
});

export const BallerThings = class extends React.Component {
  componentDidMount() {
    const emoji = ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🔮'];

    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    const canvas = document.createElement('canvas');
    canvas.className = 'balls-canvas';
    canvas.width = maxX * 2;
    canvas.height = maxY * 2;
    canvas.style.width = maxX;
    canvas.style.height = maxY;

    const parent = this.node.parentNode.parentNode; // I am ashamed

    parent.insertBefore(canvas, parent.childNode);

    this.canvas = canvas;

    const context = this.canvas.getContext('2d');

    context.scale(2, 2);

    setTimeout(() => {
      this.interval = window.setInterval(() => {
        this.drawEmoji(context, emoji, maxX, maxY);
      }, 250);
    }, 2000);
  }

  componentWillUnmount() {
    const context = this.canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    window.clearInterval(this.interval);
  }

  drawEmoji(context, emojiBank, maxX, maxY) {
    const [x, y] = [maxX, maxY].map(value => Math.floor(Math.random() * value));
    const char = emojiBank[Math.floor(Math.random() * emojiBank.length)];

    context.font = '128px Montserrat';

    context.fillText(char, x, y);
  }

  render() {
    return (
      <div ref={node => this.node = node}>
        <Heading size={1} caps fit style={{ zIndex: 1,  position: 'relative' }} textColor="white">Baller</Heading>
        <Heading size={1} caps fit style={{ zIndex: 1,  position: 'relative' }} textColor="white">Things</Heading>
      </div>
    );
  }
}

BallerThings.Props = {
  bgColor: 'black'
};
