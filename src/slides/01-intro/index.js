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

import { Logo as ObjectPartnersLogo } from '@objectpartners/components';

import preloader from 'spectacle/lib/utils/preloader';

import { GatsbyLogo, QuoteSlide } from '../../components';

const images = {
  intro: require('./assets/cover-optimized.jpg'),
  me: require('./assets/me-optimized.jpg')
};

preloader(images);

export const Intro = () => (
  <div>
    <div
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
        backgroundColor: '#fad961',
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
        marginTop: '1rem'
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

export const ManningEarlyAccess = () => (
  <QuoteSlide author="Manning Publications" href="https://twitter.com/ManningBooks/status/1027182389183696898" image={require('./assets/manning-optimized.jpg')} quote={`Beef up your #webdev skill set with our new #liveVideo course CSS in JavaScript with @SchauDustin. Take 50% off purchase price with code vlschautw today and tomorrow at bit.ly/2M9m63g`.trim()} />
);

ManningEarlyAccess.Props = {
  bgColor: 'black'
};

export const ObjectPartners = () => (
  <ObjectPartnersLogo style={{ height: 'auto', width: 'auto' }} />
);

ObjectPartners.Props = {
  bgImage: require('./assets/objectpartners-optimized.jpg'),
  bgDarken: 0.5
};
