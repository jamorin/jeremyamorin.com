import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.textarea`
  font-size: 1.4rem;
  padding: 1rem;
  resize: none;
  box-shadow: none;
  flex-grow: 1;
  border: 1px solid ${props => props.theme.inactive};
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  outline-color: transparent;
  &:focus {
    outline: none;
  }

  /* &::-webkit-input-placeholder {
    color: ${props => props.theme.main};
  } */
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Note = styled.p`
  padding: 0.3rem 0;
  font-size: 1rem;
  font-style: italic;
`;

const Message = styled.p`
  font-size: 2rem;
`;

const NoJs = styled.noscript`
  font-size: 1rem;
  padding: 0.3rem 0;
`;

export default class ContactForm extends React.Component {
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
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      // .then(() => navigate('/', { state: { error: false } }))
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        this.setState({ alert: 'Thanks, have a wonderful day!' });
      })
      .catch(error => {
        console.log(error);
        this.setState({ alert: 'Ohh no, something went wrong!' });
      });
  };
  render() {
    if (this.state.alert) {
      return (
        <StyledForm>
          <Message>{this.state.alert}</Message>
        </StyledForm>
      );
    }
    return (
      <StyledForm
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={this.handleSubmit}
      >
        <NoJs>This form requires javascript to be enabled!</NoJs>
        {/* // TODO recaptcha */}
        <TextArea
          name="message"
          onChange={this.handleChange}
          required
          placeholder="Or submit a direct message here..."
        />
        <Note>
          Be sure to mention an email or handle, else I won't be able to contact
          you back!
        </Note>
        <Button type="submit">Submit</Button>
      </StyledForm>
    );
  }
}
