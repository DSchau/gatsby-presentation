import React from 'react';
import { Heading, GoToAction, Image, Fill, Layout, Link, S as Span } from 'spectacle';
import styled from 'react-emotion';

import { Button } from '../../components';

export const DemoHeading = () => (
  <Heading size={2} caps fit>
    Demo(s)
  </Heading>
);

DemoHeading.Props = {
  bgImage: 'https://media.giphy.com/media/LRVnPYqM8DLag/giphy.gif',
  bgDarken: 0.25,
  notes: `
I've created (and open sourced!) some demos and repositories to illustrate some of what I've been discussing today.
`
};

export const Caveat = () => (
  <React.Fragment>
    <Heading size={2} caps fit textColor="black">This is <Span type="italic">beta</Span> software</Heading>
    <Heading size={6} textColor="black" style={{ marginTop: '4rem' }}>There <Span type="italic">might</Span> be 🐉</Heading>
  </React.Fragment>
);

Caveat.Props = {
  bgColor: '#ffd400'
};

export const HowDidItGo = () => (
  <React.Fragment>
    <Heading size={2}>Demo went&hellip;</Heading>
    <Layout style={{ marginTop: '2rem' }}>
      <GoToAction render={goTo => (
        <Fill style={{ margin: '1rem' }}><Button onClick={() => goTo('well')}>🙌</Button></Fill>
      )} />
      <GoToAction render={goTo => (
        <Fill style={{ margin: '1rem' }}><Button onClick={() => goTo('poorly')}>💩</Button></Fill>
      )} />
    </Layout>
  </React.Fragment>
);

export const Well = () => (
  null
);

Well.Props = {
  bgColor: 'green',
  id: 'well'
};

export const Poorly = () => (
  null
);

Poorly.Props = {
  bgColor: 'red',
  id: 'poorly'
};
