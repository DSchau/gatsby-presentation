import React from 'react';
import { Heading, Image, Link } from 'spectacle';
import styled from 'react-emotion';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  gridRowGap: 8,
  gridColumnGap: 8
});

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
