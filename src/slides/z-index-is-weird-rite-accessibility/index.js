import React from 'react';
import { Heading, CodePane, GoToAction, Image, Fill, Layout, Link, S as Span } from 'spectacle';
import styled from 'react-emotion';

import { Emoji } from '../../components';

const Button = styled('button')({
  fontSize: 32,
  padding: '1rem 2rem'
});

export const AccessibilityAndMobile = () => (
  <Heading size={1} caps fit>Accessibility and Mobile</Heading>
);

AccessibilityAndMobile.Props = {
  bgImage: 'https://media.giphy.com/media/EsmlrgWNx5v0Y/giphy.gif',
  bgDarken: 0.4
};

export const EverSeenAButton = () => (
  <Button>Ever seen a button?</Button>
);

export const MeToo = () => (
  <div>
    <Button>same</Button>
    <CodePane theme="external" style={{ marginTop: '1rem' }} lang="html" source={`
<a class="button">same</a>
    `.trim()} textSize={32} />
  </div>
);

export const DoNotDoThis = () => (
  <div>
    <Heading size={1} fit caps>Don't do this</Heading>
    <Emoji ariaLabel="Do not do this">🙅</Emoji>
  </div>
);

export const BackToRegular = () => (
  <div>
    <Heading size={1} fit caps textColor="white">Back to our</Heading>
    <Heading size={2} fit caps textColor="white">Regularly scheduled programming</Heading>
  </div>
);

BackToRegular.Props = {
  bgImage: 'https://media.giphy.com/media/Yqn9tE2E00k4U/giphy.gif',
  bgDarken: 0
};
