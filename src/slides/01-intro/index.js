import React from 'react';
import {
  Appear,
  Heading,
  Fill,
  Image,
  Layout,
  Link,
  S as Span
} from 'spectacle';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import preloader from 'spectacle/lib/utils/preloader';

import { GatsbyLogo } from '../../components';

const images = {
  intro: require('./assets/cover-optimized.jpg'),
  me: require('./assets/me-optimized.png')
};

preloader(images);

export const Intro = () => (
  <div>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0
      }}
    >
      <Link
        href="https://www.meetup.com/nebraskajs/events/dxndfdyxhbcb/"
        target="_blank"
      >
      </Link>
    </div>
    <Heading
      size={1}
      textFont="Bitter"
      style={{
        display: 'inline-block',
        width: 'auto',
        backgroundColor: 'white',
        color: 'rgb(36, 18, 54)',
        padding: '1rem 2rem',
        paddingBottom: '2.25rem'
      }}
    >
      Gatsby
    </Heading>
    <Heading
      size={3}
      textSize={18}
      textColor="white"
      style={{ fontWeight: 'normal' }}
    >
      <Link href="https://dustinschau.com" target="_blank" textColor="white">
        by <Span type="bold">Dustin Schau</Span>
      </Link>
    </Heading>
    <GatsbyLogo />
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Link
        href="https://gatsby.dustinschau.com"
        textColor="rgba(255, 255, 255, 0.7)"
        target="_blank"
        rel="noopener"
      >
        https://gatsby.dustinschau.com
      </Link>
    </div>
  </div>
);

Intro.Props = {
  bgColor: 'rgb(36, 18, 54)',
  notes: `
Hello! My name is Dustin Schau and I hope to share some knowledge with you about... you guessed it, Gatsby!
  `
};

export const AboutMe = () => (
  <Layout>
    <Fill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingRight: 20
      }}
    >
      <Heading size={2} caps fit>
        Who's this guy?
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <TwitterIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://twitter.com/schaudustin" textColor="white">
          schaudustin
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <GithubIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://github.com/dschau" textColor="white">
          dschau
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <WebsiteIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://dustinschau.com" textColor="white">
          website
        </Link>
      </Heading>
    </Fill>
    <Fill
      style={{
        maxWidth: '40%'
      }}
    >
      <Image src={images.me} style={{ borderRadius: 400 }} />
    </Fill>
  </Layout>
);

AboutMe.Props = {
  notes: `
I'm a frontend developer who likes to claim that I specialize in all things JavaScript. The last few months, the client work I've been doing has had a NodeJS focus, so that ties in particularly well for a deep dive into GraphQL.

I work for an awesome company called Object Partners. We have offices in Minneapolis and Omaha, and about 100 senior developers between both offices.
  `
};
