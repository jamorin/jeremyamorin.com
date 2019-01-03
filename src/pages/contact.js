import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

const Header = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
`;

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Contact" />
        <Header>Get in touch</Header>
        <ContactList />
        <ContactForm />
      </Layout>
    );
  }
}
