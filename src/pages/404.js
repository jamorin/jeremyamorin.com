import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Message = styled.h1`
  margin: auto;
  font-size: 3rem;
`;

export default () => (
  <Layout>
    <Message>Something went wrong?</Message>
  </Layout>
);
