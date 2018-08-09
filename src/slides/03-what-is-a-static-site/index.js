import React from 'react';
import styled from 'react-emotion';

import {
  Appear,
  CodePane,
  Quote,
  Heading,
  Fill,
  Image,
  Layout,
  Link,
  S as Span
} from 'spectacle';

import { Emoji, QuoteSlide, Source } from '../../components';

export const Intro = () => (
  <div>
    <Heading size={1} caps fit textColor="primary">Static</Heading>
    <Heading size={1} caps fit textColor="primary">Sites</Heading>
  </div>
);

Intro.Props = {
  bgColor: 'secondary'
};

export const StaticHtml = () => (
  <CodePane theme="external" lang="html" source={`
<body>
  <header>
    <h1>Remember HTML? Pepperidge Farm Remembers</h1>
  </header>
  <main>
    <p>This content is mind blowing</p>
  </main>
  <footer>
    <p>Copyright &copy; 1997 Probably</p>
  </footer>
</body>
  `.trim()} textSize={32} />
);

StaticHtml.Props = {
  bgColor: 'code'
};

export const OldSiteExample = () => (
  <Image src={require('./images/great-gatsby-optimized.jpg')} />
);

OldSiteExample.Props = {
  bgColor: 'black'
};

export const StaticHtmlIsHtml = () => (
  <Heading size={2} fit>Static HTML is <Span type="italic">just</Span> HTML</Heading>
);

export const ServingStaticHTML = () => (
  <Heading size={2} fit>Serving static HTML leads to a faster TTI</Heading>
);

export const JavaScriptHeavy = () => (
  <QuoteSlide author="Addy Osmani" href="https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4" image={require('./images/addy-optimized.jpg')} quote={`Byte-for-byte, JavaScript is still the most expensive resource we send to mobile phones, because it can delay interactivity in large ways.`.trim()} />
);

JavaScriptHeavy.Props = {
  bgColor: 'black'
};

export const NotRocketScience = () => (
  <div>
    <Emoji ariaLabel="it's not">🙅‍♀️</Emoji>
    <Emoji ariaLabel="rocket" style={{ marginLeft: '5rem' }}>🚀</Emoji>
    <Emoji ariaLabel="science" style={{ marginLeft: '5rem' }}>🔬</Emoji>
  </div>
);

NotRocketScience.Props = {
  bgColor: 'white'
};
