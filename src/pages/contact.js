import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { navigate } from 'gatsby-link';

const StyledForm = styled.form``;

const StyledLabel = styled.label``;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };
  render() {
    return (
      <Layout>
        <h1>Contact</h1>
        <StyledForm
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <StyledLabel>
              Don't fill this out:
              <input name="bot-field" onChange={this.handleChange} />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Your name:
              <br />
              <input type="text" name="name" onChange={this.handleChange} />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Your email:
              <br />
              <input type="email" name="email" onChange={this.handleChange} />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Message:
              <br />
              <textarea
                name="message"
                rows="20"
                cols="20"
                onChange={this.handleChange}
              />
            </StyledLabel>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </StyledForm>
      </Layout>
    );
  }
}
