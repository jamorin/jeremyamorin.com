import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import Favicon from 'react-favicon';

import favicon from '../favicon.png';
import Footer from '../components/Footer';

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
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
    <Footer />
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
