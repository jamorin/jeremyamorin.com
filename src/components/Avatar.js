import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  background-image: url(../assets/avatar.jpg);
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
`;

const Avatar = () => <StyledAvatar />;

export default Avatar;
