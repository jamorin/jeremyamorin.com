import React from 'react';
import styled from 'styled-components';

const A = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: ${props => props.theme.main};
  border-bottom: 1px dotted;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    border-bottom-style: solid;
  }
`;

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
`;

const Footnote = styled.p`
  font-size: 1.1rem;
`;

export default () => (
  <Footer>
    <Footnote>
      Handcrafted using <A href="https://www.gatsbyjs.org">Gatsby</A> and hosted
      on <A href="https://www.netlify.com">Netlify</A>.
    </Footnote>
    <Footnote>
      Source code on{' '}
      <A href="https://github.com/jamorin/jeremyamorin.com">Github</A>.
    </Footnote>
  </Footer>
);
