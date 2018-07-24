import React from 'react';
import { Link } from 'spectacle';
import styled from 'react-emotion';
import LinkIcon from 'react-icons/lib/fa/external-link-square';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: 24
});

const SourceLink = styled(Link)({
  paddingLeft: 6
}, ({ color = 'white' }) => ({
  color
}));

export function Source({ children, href }) {
  return (
    <Container><LinkIcon /><SourceLink href={href} target="_blank">{children}</SourceLink></Container>
  );
}
