import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import Favicon from 'react-favicon';

import favicon from '../favicon.png';

injectGlobal`
  html {
    font-family: 'Open Sans', sans-serif;
  }
`;

const StyledLayout = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 70px 0;
`;

const Layout = ({ children }) => (
  <StyledLayout>
    <Favicon url={favicon} />
    <Helmet
      title="Jeremy Amorin | Software Engineer"
      meta={[
        { name: 'description', content: 'The personal site of Jeremy Amorin' },
        {
          name: 'keywords',
          content:
            'programming, software, engineer, developer, react, java, javascript',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        {
          // Android address bar
          name: 'theme-color',
          content: '#2b9eeb',
        },
      ]}
    />
    {children()}
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
