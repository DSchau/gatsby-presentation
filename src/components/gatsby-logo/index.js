import React from 'react';
import styled from 'react-emotion';

const Svg = styled('svg')({
  margin: '1rem 0',
  maxHeight: '40vh'
});

export function GatsbyLogo() {
  return (
    <Svg version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1200 1200" xmlSpace="preserve" enableBackground="new 0 0 1200 1200">
        <path fill="#639" d="M600,0C268.6,0,0,268.6,0,600s268.6,600,600,600s600-268.6,600-600S931.4,0,600,0z M266.6,933.3 C176.1,842.8,131,724.6,129.6,606L594,1070.4C475.4,1069,357.2,1023.9,266.6,933.3z M704.3,1059.4L140.6,495.7 c47.5-210.1,235-367.1,459.4-367.1c156.9,0,295.5,77,381.2,194.9L915.6,379C845.8,279.5,730.5,214.3,600,214.3 c-167.7,0-310.3,107.7-363.3,257.5l491.6,491.6c123.4-43.7,218-148.2,247.6-277.6H771.4V600h300 C1071.4,824.5,914.4,1011.9,704.3,1059.4z" />
    </Svg>
  );
}