import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUpBig } from 'react-animations';

const fadeInFooter = keyframes`${fadeInUpBig}`;

const StyledFooter = styled.footer`
  font-size: 1em;
  text-align: center;
  animation: ${fadeInFooter} 1s;
  a {
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    Powered by{' '}
    <a
      style={{ color: 'dodgerblue' }}
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React
    </a>+{' '}
    <a
      style={{ color: 'purple' }}
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      GatsbyJS
    </a>{' '}
    +{' '}
    <a
      style={{ color: 'palevioletred' }}
      href="https://www.styled-components.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      styled-components
    </a>
  </StyledFooter>
);

export default Footer;
