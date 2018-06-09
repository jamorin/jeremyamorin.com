import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUpBig } from 'react-animations';

const fadeInFooter = keyframes`${fadeInUpBig}`;

const StyledFooter = styled.footer`
  text-align: center;
  animation: ${fadeInFooter} 1s;
`;

const A = styled.a`
  text-decoration: none;
  color: ${props => props.color};
  &:hover {
    border-bottom: 1px solid ${props => props.color};
  }
`;

const Footer = () => (
  <StyledFooter>
    Powered by{' '}
    <A
      color="deepskyblue"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React
    </A>
    {' + '}
    <A
      color="palevioletred"
      href="https://www.styled-components.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      styled-components
    </A>
    {' + '}
    <A
      color="purple"
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      GatsbyJS
    </A>
    {' + '}
    <A
      color="red"
      href="https://github.com/jamorin/jeremyamorin.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      ❤️
    </A>
  </StyledFooter>
);

export default Footer;
