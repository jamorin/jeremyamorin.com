import React from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import avatar from '../assets/avatar.jpg';

const avatarAnimation = keyframes`${zoomIn}`;

const StyledAvatar = styled.div`
  background-image: url(${avatar});
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  margin: auto;
  animation: ${avatarAnimation} 2s;
`;

const Avatar = () => <StyledAvatar />;

export default Avatar;
