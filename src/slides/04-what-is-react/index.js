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
  S as Span
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
    <BlockQuote textSize={48}>
      Any application that can be written in JavaScript, will eventually be written in JavaScript.
      <Cite>Jeff Atwood</Cite>
    </BlockQuote>
  </React.Fragment>
);

export const PrincipleOfLeastPowerReact = () => (
  <React.Fragment>
    <BlockQuote textSize={48}>
      Any application that can be written <Span type="strikethrough">in JavaScript</Span> in React, will eventually be written <Span type="strikethrough">in JavaScript</Span> in React.
      <Cite>Me, apparently</Cite>
    </BlockQuote>
  </React.Fragment>
);

export const TheKeyAbstraction = () => (
  <Heading size={2} fit caps>One <Span type="italic">key</Span> abstraction</Heading>
);

export const JSX = () => (
  <CodePane lang="jsx" source={`
import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Remember HTML? Pepperidge Farm Remembers</h1>
    </header>
  );
}
  `.trim()} textSize={32} />
);

JSX.Props = {
  bgColor: 'code'
};

export const Components = () => (
  <CodePane lang="jsx" source={`
import React from 'react';

import { Content, Footer, Header, Layout } from './components';

function App() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );  
}
  `.trim()} textSize={32} />
);

Components.Props = {
  bgColor: 'code'
};
