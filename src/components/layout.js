import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from '../globalStyle';
import Footer from './Footer';
import Header from './Header';
import Head from './Head';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > * {
    flex-shrink: 0;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Head />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </ThemeProvider>
);

export default Layout;
