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

import { QuoteSlide, Source } from '../../components';

export function Intro() {
  return <Heading size={1} caps fit textColor="primary">What is a static site?</Heading>
}

Intro.Props = {
  bgColor: 'secondary'
};

export const StaticHtml = () => (
  <CodePane lang="html" source={`
<body>
  <header>
    <h1>Remember HTML? Pepperidge Farm Remembers</h1>
  </header>
  <main>
    <p>This content is mind blowing</p>
  </main>
  <nav>
    <ul>
      <li><a href="/something-else">Sup</a></li>
    </ul>
  </nav>
  <footer>
    <p>Copyright &copy; 2018</p>
  </footer>
</body>
  `.trim()} textSize={32} />
);

StaticHtml.Props = {
  bgColor: 'code'
};

export const OldSiteExample = () => (
  <Image src={require('./images/great-gatsby.png')} />
);

export const StaticHtmlIsHtml = () => (
  <Heading size={2} fit>Static HTML is <Span type="italic">just</Span> HTML</Heading>
);
