import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

import github from '../github.svg';
import envelope from '../envelope.svg';

const Li = styled.li`
  display: inline-block;
  margin-right: 20px;
  opacity: 0.3;
  transition: opacity 0.5s ease-out;
  &:hover {
    opacity: 0.8;
  }

  img {
    height: 46px;
    width: 46px;
  }
`;

const links = [
  {
    href: 'https://github.com/jamorin',
    title: 'Github',
    image: github,
  },
  {
    href: 'mailto: hello@jeremyamorin.com',
    title: 'Email',
    image: envelope,
  },
];

const zoomInSocalLinks = keyframes`${zoomIn}`;
const StyledSocialLinks = styled.ul`
  animation: ${zoomInSocalLinks} 2s;
`;

const SocialLinks = () => (
  <StyledSocialLinks>
    {links.map(({ href, title, image }) => (
      <Li key={href}>
        <a href={href} title={title}>
          <img src={image} alt={title} />
        </a>
      </Li>
    ))}
  </StyledSocialLinks>
);

export default SocialLinks;
