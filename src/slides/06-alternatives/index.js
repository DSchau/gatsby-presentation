import React from 'react';
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

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '100%',
  '@media only screen and (min-width: 768px)': {
    gridTemplateColumns: '33% 33% 33%'
  }
});

export const Intro = () => (
  <Heading size={1} caps fit>Alternatives</Heading>
);

export const TwoCamps = () => (
  <div>
    <Heading size={2} caps fit>Two camps</Heading>
    <Layout>
      <Fill><Heading size={2} fit textColor="white">Static</Heading></Fill>
      <Fill><Heading size={2}><Span type="italic">vs.</Span></Heading></Fill>
      <Fill><Heading size={2} fit textColor="white">Server</Heading></Fill>
    </Layout>
  </div>
);

export const Static = () => (
  <div>
    <Heading size={2} caps textColor="black" style={{ marginBottom: '2rem' }}>Static</Heading>
    <Grid>
      {
        [require('./images/react-static.png'), require('./images/vuepress.png'), require('./images/sapper.png'), require('./images/11ty.png'), require('./images/jekyll.png')]
          .map(src => (
            <Image src={src} key={src} style={{ height: 200 }} />
          ))
      }
    </Grid>
  </div>
);

Static.Props = {
  bgColor: 'white'
};

export const ServerRendered = () => (
  <div>
    <Heading size={2} caps textColor="black" style={{ marginBottom: '2rem' }}>Server Rendered</Heading>
    <Grid>
      {
        [require('./images/nextjs.png'), require('./images/nuxtjs.png'), require('./images/angular-universal.png')]
          .map(src => (
            <Image src={src} key={src} style={{ height: 200 }} />
          ))
      }
    </Grid>
  </div>
);

ServerRendered.Props = {
  bgColor: 'white'
};
