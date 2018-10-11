import React from 'react';
import styled from 'react-emotion';

import {
  Appear,
  BlockQuote,
  Cite,
  Quote,
  Heading,
  Fill,
  Image,
  Layout,
  Link,
  S as Span,
  Text
} from 'spectacle';

import { Emoji, QuoteSlide, Source } from '../../components';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '100%',
  '@media only screen and (min-width: 768px)': {
    gridTemplateColumns: '33% 33% 33%'
  }
});

export function BlazingFastSsgReact() {
  return (
    <div>
      {['Blazing fast', 'static site generation', '__for__', 'React'].map(
        text => {
          if (text.includes('__')) {
            return (
              <Heading size={3} textColor="white" key={text}>
                {text.replace(/_/g, '')}
              </Heading>
            );
          }
          return (
            <Heading size={1} textColor="white" caps fit key={text}>
              <Span type="underline">{text}</Span>
            </Heading>
          );
        }
      )}
    </div>
  );
}

BlazingFastSsgReact.Props = {
  bgImage: require('./images/blazing-fast-optimized.jpg'),
  bgDarken: 0.5
};

export const AppGeneratorPSA = () => (
  <div>
    <Heading size={1} caps>
      PSA
    </Heading>
    <BlockQuote textSize={48} textColor="white">
      @gatsbyjs is not just for "sites". It produces static HTML and then
      rehydrates into a React app.
      <Cite>Kyle Mathews (Creator of Gatsby)</Cite>
    </BlockQuote>
  </div>
);

export const ReactDocs = () => (
  <Image src={require('./images/reactjs-optimized.jpg')} />
);

ReactDocs.Props = {
  bgColor: 'black'
};

export const Stats = () => (
  <div>
    <Heading size={1} caps fit textColor="black">
      Statistics
    </Heading>
    <Heading size={2} caps textColor="black" style={{ marginBottom: '1rem' }}>
      ~26.5k <Emoji ariaLabel="Github stars">⭐</Emoji>
    </Heading>
    <Heading size={2} caps textColor="black" style={{ marginBottom: '1rem' }}>
      ~1000 <Emoji ariaLabel="Contributors">👤</Emoji>
    </Heading>
    <Heading size={2} caps textColor="black">
      ~500K <Emoji ariaLabel="Downloads">📈</Emoji>
    </Heading>
  </div>
);

Stats.Props = {
  bgColor: 'white'
};

export const BlazingFast = () => (
  <div>
    <Heading size={1} caps fit textColor="#ff7400">
      Blazing
    </Heading>
    <Heading size={1} caps fit textColor="black">
      Fast
    </Heading>
  </div>
);

BlazingFast.Props = {
  bgColor: 'white'
};

export const BlazingFastQuote = () => (
  <QuoteSlide
    author="Andrew Clark"
    href="https://twitter.com/acdlite/status/974390255393505280?lang=en"
    image={require('./images/andrew-clark-optimized.jpg')}
    quote={`Tip when evaluating libraries: check if it's blazing fast. If it's fast, but the README doesn't specify whether its fastness is blazing, keep searching. Often you can find a similar library that does the same thing, but blazingly. Blazing means good.`.trim()}
  />
);

BlazingFastQuote.Props = {
  bgColor: 'black'
};

export const BlazingMeansGood = () => (
  <Quote style={{ borderLeftWidth: 4 }}>Blazing means good.</Quote>
);

BlazingMeansGood.Props = {
  bgColor: 'tertiary'
};

export const AlrightHow = () => (
  <Heading size={2} fit>
    How do we get blazing-fast?
  </Heading>
);

export const PerformanceTips = () => (
  <Image src={require('./images/performance-optimized.jpg')} />
);

PerformanceTips.Props = {
  bgColor: 'white'
};

export const Acronyms = () => (
  <div>
    <Heading size={2} textColor="white">
      <Span type="underline">Perf. Acronyms</Span>
    </Heading>
    <Grid>
      {[
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
      ].map((pattern, index) => {
        const Wrapper = index === 0 ? React.Fragment : Appear;
        return (
          <Wrapper key={pattern} order={index}>
            <Heading size={2} style={{ marginTop: '1rem' }}>
              {pattern}
            </Heading>
          </Wrapper>
        );
      })}
    </Grid>
    <Source href="https://github.com/google/WebFundamentals/blob/master/src/data/glossary.yaml">
      google/WebFundamentals
    </Source>
  </div>
);

export const HowMany = () => (
  <Heading size={2} fit textColor="white">
    How many do you actually <Span type="italic">know?</Span>
  </Heading>
);

export const UsingThePlatformIsHard = () => (
  <div>
    <Heading size={1} caps fit textColor="black">
      <Span type="italic">Using the platform</Span>
    </Heading>
    <Heading size={3} caps textColor="black">
      is
    </Heading>
    <Heading size={1} caps fit textColor="black">
      <Span type="underline">exhausting</Span>
    </Heading>
    <Text>(but generally worth it, don't @ me)</Text>
  </div>
);

UsingThePlatformIsHard.Props = {
  bgColor: 'white'
};

HowMany.Props = {
  bgImage: 'https://media.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif',
  bgDarken: 0.5
};

export const OneKeyMetric = () => (
  <div>
    <Heading size={1} caps fit>
      <Span type="italic">Having said that</Span>
    </Heading>
    <Heading size={2} caps fit>
      One key metric
    </Heading>
  </div>
);

export const TTI = () => (
  <div style={{ position: 'relative', height: '80vh', width: '100vw' }}>
    <Text
      style={{
        position: 'absolute',
        bottom: -50,
        left: -100,
        padding: '0.5rem',
        backgroundColor: 'black'
      }}
      textColor="white"
      textSize={20}
    >
      Addy Osmani - The Cost of JavaScript 2018
    </Text>
  </div>
);

TTI.Props = {
  bgImage:
    'https://cdn-images-1.medium.com/max/1600/1*ow6eliCJiSeX7-Ri4hOA5Q.gif'
};

// TODO: add more data for blazing fast, and how you get it
