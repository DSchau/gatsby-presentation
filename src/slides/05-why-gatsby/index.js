import React from 'react';
import Player from 'react-player';

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

export const SvgBlur = () => (
  <Player url={require('./video/svg-blur.mp4')} height="100%" width="100%" playing={true} loop={true} />
);

SvgBlur.Props = {
  bgColor: '#000'
};
