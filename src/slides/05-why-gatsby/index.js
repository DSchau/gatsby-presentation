import React from 'react';
import Player from 'react-player';
import styled from 'react-emotion';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Quote,
  Heading,
  Fill,
  Image,
  Layout,
  List,
  ListItem,
  Link,
  S as Span,
  Text
} from 'spectacle';

import { Emoji } from '../../components';

import './index.css';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '100%',
  '@media only screen and (min-width: 768px)': {
    gridTemplateColumns: '50% 50%'
  }
});

export const Intro = () => (
  <div>
    <Heading size={2} caps fit>
      OK. Great!
    </Heading>
    <Heading size={1} caps fit>
      <Span type="italic">How?</Span>
    </Heading>
  </div>
);

export const KyleMathewsHardToScrewUp = () => (
  <React.Fragment>
    <BlockQuote textSize={64} textColor="white">
      I designed Gatsby with the goal that when using it, it'd be really hard to
      build a slow site.
      <Cite>Kyle Mathews (Creator of Gatsby)</Cite>
    </BlockQuote>
  </React.Fragment>
);

KyleMathewsHardToScrewUp.Props = {
  bgColor: 'black'
};

export const BlazingByDefault = () => (
  <div>
    <Heading size={2} caps fit>
      Blazing fast
    </Heading>
    <Heading size={2} caps>
      by
    </Heading>
    <Heading size={2} caps fit textColor="white">
      default
    </Heading>
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
  <Image src={require('./images/lighthouse-optimized.jpg')} />
);

PerfScores.Props = {
  bgColor: '#242424'
};

export const How = () => (
  <div>
    <Heading size={1} caps fit textColor="white">
      How?
    </Heading>
    <Heading size={3} caps fit textColor="secondary">
      <Span type="italic">aka why is Gatsby so fast?</Span>
    </Heading>
  </div>
);

export const ReasonCodeSplitting = () => (
  <Heading size={2} caps fit>
    Route-based code splitting
  </Heading>
);

export const RouteExample = () => (
  <CodePane
    theme="external"
    lang="markup"
    source={`
 src
 ├── pages
 │   ├── 404.js
 │   ├── contact.js
 │   ├── index.js
 │   └── sponsors.js
  `.trim()}
    textSize={40}
    textColor="white"
  />
);

RouteExample.Props = {
  bgColor: 'code'
};

export const RouteComponentExample = () => (
  <div>
    <Heading size={2}>
      <Code textColor="white">src/pages/contact.js</Code>
    </Heading>
    <CodePane
      theme="external"
      lang="jsx"
      source={`
import React from 'react';
import { Formik } from 'formik';
import yup from 'yup';

export default function ContactPage() {
  // you get the idea
  return (
    <Formik yadda={true} yaddaYadda={true} />
  );
}
    `.trim()}
      textSize={32}
    />
  </div>
);

RouteComponentExample.Props = {
  bgColor: 'code'
};

// export const StopCreatingMassiveBundles = () => (
//   <div>
//     <Heading size={1} caps fit textColor="black">Stop</Heading>
//     <Heading size={1} caps fit textColor="black">Creating</Heading>
//     <Heading size={1} caps fit textColor="black">Massive bundles</Heading>
//     <Text fit>(or you do you, I'm just some guy&mdash;not your boss)</Text>
//   </div>
// );

// StopCreatingMassiveBundles.Props = {
//   bgColor: 'white'
// };

export const InlineCriticalResources = () => (
  <Heading size={2} caps fit>
    Inlining of Critical Resources
  </Heading>
);

export const HeadTags = () => (
  <CodePane
    theme="external"
    lang="markup"
    source={`
<head>
  <link as="script" rel="preload" href="/component---src-pages-index-js-5de4c012fea4ea10dce2.js">
  <link as="script" rel="preload" href="/app-aa6a148b9c4dacefce69.js">
  <link as="script" rel="preload" href="/webpack-runtime-f40cea91916f666a30a0.js">
</head>
  `.trim()}
    textSize={32}
  />
);

HeadTags.Props = {
  bgColor: 'code'
};

export const BallerImages = () => (
  <div>
    {['Simple', 'Performant'].map(word => (
      <Heading size={1} caps fit key={word}>
        {word}
      </Heading>
    ))}
    <Heading size={2} caps fit>
      Image Optimizations
    </Heading>
  </div>
);

export const SvgBlur = () => (
  <Player
    url={require('./video/svg-blur.mp4')}
    height="100%"
    width="100%"
    playing={true}
    loop={true}
  />
);

SvgBlur.Props = {
  bgColor: '#000'
};

export const GatsbySvgBlur = () => (
  <Player
    url={require('./video/gatsby-svg-blur.mp4')}
    height="100%"
    width="100%"
    playing={true}
    loop={true}
  />
);

GatsbySvgBlur.Props = {
  bgColor: '#000'
};

// TODO: add svg blur up for people

export const GatsbyImage = () => (
  <div>
    <Heading size={1} fit>
      gatsby-image
    </Heading>
    <Heading size={2}>
      <Span type="italic" textFont="Baskerville">
        &amp;
      </Span>
    </Heading>
    <Heading size={1} fit>
      graphql
    </Heading>
  </div>
);

export const Blockchain = () => (
  <div>
    <Heading size={1} fit caps>
      and also&hellip;
    </Heading>
    <Heading size={2} fit caps textColor="white">
      Blockchain!!111
    </Heading>
  </div>
);

Blockchain.Props = {
  bgImage: require('./images/blockchain-optimized.jpg'),
  bgDarken: 0.5
};

export const GraphiQLExample = () => (
  <Image src={require('./images/graphql-optimized.jpg')} />
);

GraphiQLExample.Props = {
  bgColor: 'black'
};

export const GraphqlQueryShitYo = () => (
  <React.Fragment>
    <BlockQuote textSize={64} textColor="white">
      GraphQL is the best way to query shit, yo.
      <Cite>Mikhail Novikov</Cite>
    </BlockQuote>
  </React.Fragment>
);

GraphqlQueryShitYo.Props = {
  bgColor: 'black'
};
