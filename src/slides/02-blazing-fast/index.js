import React from 'react';
import styled from 'react-emotion';

import {
  Appear,
  Quote,
  Heading,
  Fill,
  Image,
  Layout,
  Link,
  S as Span
} from 'spectacle';

import { QuoteSlide, Source } from '../../components';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '100%',
  '@media only screen and (min-width: 768px)': {
    gridTemplateColumns: '33% 33% 33%'
  }
});

export function BlazingFastSsgReact() {
  return (
    <Heading size={2} fit textColor="white"><Span type="underline">Blazing-fast</Span> <Span type="underline">static site generator</Span> for <Span type="underline">React</Span></Heading>
  );
}

BlazingFastSsgReact.Props = {
  bgImage: require('./images/blazing-fast-optimized.jpg'),
  bgDarken: 0.5
};

export const BlazingFast = () => (
  <Heading size={1} fit>Blazing-fast</Heading>
);

export const BlazingFastQuote = () => (
  <QuoteSlide author="Andrew Clark" href="https://twitter.com/acdlite/status/974390255393505280?lang=en" image={require('./images/andrew-clark-optimized.jpg')} quote={`Tip when evaluating libraries: check if it's blazing fast. If it's fast, but the README doesn't specify whether its fastness is blazing, keep searching. Often you can find a similar library that does the same thing, but blazingly. Blazing means good.`.trim()} />
);

export const BlazingMeansGood = () => (
  <Quote style={{ borderLeftWidth: 4 }}>Blazing means good.</Quote>
);

BlazingMeansGood.Props = {
  bgColor: 'tertiary'
};

export const AlrightHow = () => (
  <Heading size={2} fit>How do we get blazing-fast?</Heading>
);

export const PerformanceTips = () => (
  <Image src={require('./images/performance-optimized.png')} />
);

PerformanceTips.Props = {
  bgColor: 'white'
};

export const Acronyms = () => (
  <div>
    <Heading size={2} textColor="white"><Span type="underline">Perf. Acronyms</Span></Heading>
    <Grid>
      {
        [
          'H/2',
          'PRPL',
          'RAIL',
          'FLIP',
          'SPA',
          'SW',
          'TTI',
          'FMP',
          'FCP',
          'TTFP',
          'PWA',
          'TTFB'
        ]
          .map((pattern, index) => {
            const Wrapper = index === 0 ? React.Fragment : Appear;
            return <Wrapper key={pattern} order={index}><Heading size={2} style={{ marginTop: '1rem' }}>{pattern}</Heading></Wrapper>
          })
      }
    </Grid>
    <Source href="https://github.com/google/WebFundamentals/blob/master/src/data/glossary.yaml">google/WebFundamentals</Source>
  </div>
);

export const HowMany = () => (
  <Heading size={2} fit textColor="white">How many do you actually <Span type="italic">know?</Span></Heading>
);

HowMany.Props = {
  bgImage: 'https://media.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif',
  bgDarken: 0.5
};

export const OKTTI = () => (
  <Heading size={1} caps fit><Span type="underline">T</Span>ime <Span type="underline">T</Span>o <Span type="underline">I</Span>nteractive</Heading>
);
