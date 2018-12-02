import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

import github from '../assets/github.svg';
import envelope from '../assets/envelope.svg';

const Li = styled.li`
  display: inline-block;
  margin-right: 20px;
  opacity: 0.4;
  transition: opacity 0.5s ease-out;
  &:hover {
    opacity: 0.9;
  }

  img {
    height: 46px;
    width: 46px;
  }
`;

const zoomInSocalLinks = keyframes`${zoomIn}`;
const StyledSocialLinks = styled.ul`
  animation: ${zoomInSocalLinks} 2s;
`;

const SocialLinks = () => (
  <StyledSocialLinks>
    <Li>
      <a href="https://github.com/jamorin" title="Github">
        <img src={github} alt="Github" />
      </a>
    </Li>
    <Li>
      <Link to="/contact">
        <img src={envelope} alt="Contact" />
      </Link>
    </Li>
  </StyledSocialLinks>
);

export default SocialLinks;
