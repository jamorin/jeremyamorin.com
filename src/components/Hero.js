import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInLeft, fadeInRight, flip } from 'react-animations';
import SocialLinks from './SocialLinks';

const f = keyframes`${flip}`;

const StyledHero = styled.div`
  text-align: center;
  hr {
    border: none;
    border-bottom: 1px solid grey;
    margin: 30px 30%;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fadeInEmoji = keyframes`${fadeIn}`;
const Emojis = styled.div`
  font-size: 1.5em;
  animation: 3s ${fadeInEmoji};
  user-select: none;
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 4s linear infinite;
  padding: 2rem 1rem;
  font-size: 3rem;
`;

const fadeInLeftName = keyframes`${fadeInLeft}`;
const Name = styled.h1`
  font-size: 3rem;
  animation: ${fadeInLeftName} 1s;
`;

const fadeInRightDescription = keyframes`${fadeInRight}`;
const Description = styled.h2`
  font-size: 2rem;
  font-style: normal;
  animation: ${fadeInRightDescription} 1s;
  a {
    text-decoration: none;
    color: dodgerblue;
    &:hover {
      border-bottom: 1px solid dodgerblue;
    }
  }
`;

export default () => (
  <StyledHero>
    <Emojis>🇺🇸 😀 🐕 💻 🍻 🚴 🎮</Emojis>
    <Name>Jeremy Amorin</Name>
    <Description>
      Software Engineer at <a href="https://kubra.com">KUBRA</a>
    </Description>
    <hr />
    <SocialLinks />
  </StyledHero>
);
