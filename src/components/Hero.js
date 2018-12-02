import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInLeft, fadeInRight } from 'react-animations';
import SocialLinks from './SocialLinks';
import Footer from '../components/Footer';
import Avatar from '../components/Avatar';

const StyledHero = styled.section`
  text-align: center;
  hr {
    border: none;
    border-bottom: 1px solid darkgray;
    margin: 30px 30%;
  }
`;

const fadeInEmoji = keyframes`${fadeIn}`;
const Emojis = styled.div`
  font-size: 1.5em;
  animation: 3s ${fadeInEmoji};
  user-select: none;
  letter-spacing: 12px;
  /* font-family: 'Segoe UI Emoji'; */
`;

const fadeInLeftName = keyframes`${fadeInLeft}`;
const Name = styled.h1`
  font-size: 3rem;
  animation: ${fadeInLeftName} 2s;
`;

const fadeInRightDescription = keyframes`${fadeInRight}`;
const Description = styled.p`
  font-size: 1.2rem;
  font-style: normal;
  animation: ${fadeInRightDescription} 2s;
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
    <Emojis>
      <span role="img" aria-label="American">
        🇺🇸
      </span>
      <span role="img" aria-label="Smile">
        😀
      </span>
      <span role="img" aria-label="Dog">
        🐕
      </span>
      <span role="img" aria-label="Computer">
        💻
      </span>
      <span role="img" aria-label="Beer">
        🍻
      </span>
      <span role="img" aria-label="Biker">
        🚴
      </span>
      <span role="img" aria-label="Gaming">
        🎮
      </span>
    </Emojis>
    <Name>Jeremy Amorin</Name>
    <Avatar />
    <Description>
      Hi. I'm a Software Engineer,
      <br />
      but man, am I bad at animations.
    </Description>
    <hr />
    <SocialLinks />
    <Footer />
  </StyledHero>
);
