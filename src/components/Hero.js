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
  /* font-family: 'Segoe UI Emoji'; */
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
    <Avatar />
    <Name>Jeremy Amorin</Name>
    <Description>
      Software Engineer at <a href="https://kubra.com">KUBRA</a>
    </Description>
    <hr />
    <SocialLinks />
    <Footer />
  </StyledHero>
);
