import React from 'react';

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
  S as Span,
  Text
} from 'spectacle';

import { ReactLogo } from '../../components';

export function Intro() {
  return <ReactLogo />
}

Intro.Props = {
  bgColor: 'black'
};

export const PrincipleOfLeastPower = () => (
  <React.Fragment>
    <BlockQuote textSize={64} textColor="white">
      Any application that can be written in JavaScript, will eventually be written in JavaScript.
      <Cite>Jeff Atwood</Cite>
    </BlockQuote>
  </React.Fragment>
);

PrincipleOfLeastPower.Props = {
  bgColor: 'black'
};

export const PrincipleOfLeastPowerReact = () => (
  <React.Fragment>
    <BlockQuote textSize={64} textColor="white">
      Any application that can be written <Span type="strikethrough">in JavaScript</Span> in React, will eventually be written <Span type="strikethrough">in JavaScript</Span> in React.
      <Cite>Me, apparently</Cite>
    </BlockQuote>
  </React.Fragment>
);

PrincipleOfLeastPowerReact.Props = {
  bgColor: 'black'
};

export const FrameworkComparison = () => (
  <div style={{ position: 'relative', height: '80vh', width: '100%' }}>
    <Text style={{ position: 'absolute', bottom: -50, left: '50%', transform: 'translateX(-50%)', padding: '0.5rem', backgroundColor: 'black', whiteSpace: 'nowrap' }} textColor="white" textSize={20}>Laurie Voss - npm and the future of JavaScript</Text>
    <Image src={require('./images/frontend-frameworks-optimized.jpg')} />
  </div>
);

FrameworkComparison.Props = {
  bgColor: 'white'
};

export const TheKeyAbstraction = () => (
  <Heading size={2} fit caps>One <Span type="italic">key</Span> abstraction</Heading>
);

export const JSX = () => (
  <CodePane theme="external" lang="jsx" source={`
import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Remember ~~HTML~~ JSX? Pepperidge Farm Remembers</h1>
    </header>
  );
}
  `.trim()} textSize={32} />
);

JSX.Props = {
  bgColor: 'code'
};

export const Components = () => (
  <CodePane theme="external" lang="jsx" source={`
import React from 'react';

import { Content, Footer, Header } from './components';

function App() {
  return (
    <Header />
    <Content />
    <Footer />
  );  
}
  `.trim()} textSize={32} />
);

Components.Props = {
  bgColor: 'code'
};
