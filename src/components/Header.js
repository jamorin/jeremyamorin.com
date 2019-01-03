import React from 'react';
import styled from 'styled-components';
/*
import {
  // FaBloggerB,
  // FaRegEnvelope,
} from 'react-icons/fa';
*/
import { Link as GatsbyLink } from 'gatsby';
import Avatar from './Avatar';
import Button from './Button';
import { theme } from '../globalStyle';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const ContactLink = styled(Button)`
  /* border: 3px solid brown; */
`;

// const ContactIcon = styled(FaRegEnvelope)`
//   margin-right: .3rem;
// `;

/*
const BloggerLink = styled(StyledLink)``;

const BloggerIcon = styled(FaBloggerB)`
`;
*/

const NavItems = styled.div``;

const activeStyle = {
  backgroundColor: theme.main,
  color: '#fff',
};

export default () => (
  <Header>
    <Avatar />
    <NavItems>
      {/* <BloggerLink title="Blog" to="/blog/">
        <BloggerIcon />
        <span>Blog</span>
      </BloggerLink> */}
      <ContactLink
        as={GatsbyLink}
        title="Contact"
        to="/contact/"
        activeStyle={activeStyle}
      >
        {/* <ContactIcon /> */}
        <span>Contact</span>
      </ContactLink>
    </NavItems>
  </Header>
);
