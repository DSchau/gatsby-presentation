import React from 'react';
import styled from 'react-emotion';

const Button = styled('button')({
  outline: 'none',
  border: 'none',
  padding: '1rem 2rem',
  margin: '1rem',
  fontSize: 96,
  width: '100%'
});

function ButtonComponent(props) {
  return <Button {...props}>{props.children}</Button>;
}

export { ButtonComponent as Button }