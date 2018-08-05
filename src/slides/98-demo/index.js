import React from 'react';
import { Heading, GoToAction, Image, Fill, Layout, Link, S as Span, Text } from 'spectacle';
import styled from 'react-emotion';

import { Button, Emoji } from '../../components';

export const MidwestJS = () => (
  <Image src={require('./images/midwestjs-optimized.png')} />
);

MidwestJS.Props = {
  bgColor: '#000'
};

export const MidwestJSLighthouse = () => (
  <div style={{ position: 'relative' }}>
    <Image src={require('./images/midwestjs-lighthouse-optimized.png')} />
    <Emoji ariaLabel="Oh my god" fontSize={256} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)' }}>😱</Emoji>
  </div>
);

MidwestJSLighthouse.Props = {
  bgColor: '#242424'
};

export const WeCanDoBetter = () => (
  <Heading size={2} caps fit>We can do better</Heading>
);

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

export const NewHotness = () => (
  <Link href="https://midwestjs.netlify.com" target="_blank" rel="noopener">
    <Image src={require('./images/new-midwestjs-optimized.png')} style={{ maxHeight: '60vh' }}/>
    <Text textColor="white">midwestjs.netlify.com</Text>
  </Link>
);

NewHotness.Props = {
  bgColor: 'black'
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
  <div>
    <Heading size={2} caps fit textColor="white">omg yes</Heading>
    <GoToAction render={goTo => (
      <Fill style={{ margin: '1rem' }}><Button onClick={() => goTo('links')}>➡️</Button></Fill>
    )} />
  </div>
);

Well.Props = {
  bgColor: 'green',
  id: 'well'
};

export const Poorly = () => (
  <div>
    <Heading size={2} caps fit textColor="white">💩 happens</Heading>
    <GoToAction render={goTo => (
      <Fill style={{ margin: '1rem' }}><Button onClick={() => goTo('links')}>➡️</Button></Fill>
    )} />
  </div>
);

Poorly.Props = {
  bgColor: 'red',
  id: 'poorly'
};
