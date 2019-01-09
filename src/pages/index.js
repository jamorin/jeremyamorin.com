import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const Heading1 = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const Heading2 = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
`;

const IndexPage = () => (
  <Layout>
    <Heading2>
      Hi{' '}
      <span role="img" aria-label="Wave">
        👋
      </span>
    </Heading2>
    <Heading1>I'm Foo</Heading1>
    <Heading2>A software engineer in Tempe, AZ</Heading2>
  </Layout>
);

export default IndexPage;
