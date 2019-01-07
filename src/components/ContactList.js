import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import {
  FaRegEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaKeybase,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Obfuscate from 'react-obfuscate';

const hoverStyle = css`
  color: ${props => props.theme.main};
`;

const svgStyle = css`
  color: ${props => props.theme.gray};
  height: 1.5em;
  width: 1.5em;
  vertical-align: middle;
  margin-right: 0.5rem;
  transition: all 0.5s;
`;

const ContactLink = styled.li`
  font-size: 1.1rem;
`;

const ContactIcon = styled(FaRegEnvelope)`
  ${svgStyle}
  ${ContactLink}:hover & {
    ${hoverStyle}
  }
`;

const LinkedinLink = styled.li``;

const LinkedinIcon = styled(FaLinkedinIn)`
  ${svgStyle}
  ${LinkedinLink}:hover & {
    ${hoverStyle}
  }
`;

const GithubLink = styled.li``;

const GithubIcon = styled(FaGithub)`
  ${svgStyle}
  ${GithubLink}:hover & {
    ${hoverStyle}
  }
`;

const KeybaseLink = styled.li``;

const KeybaseIcon = styled(FaKeybase)`
  ${svgStyle}
  ${KeybaseLink}:hover & {
    ${hoverStyle}
  }
`;

const Label = styled.a`
  color: ${props => props.theme.main};
  border-bottom: 1px dotted;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    border-bottom-style: solid;
  }
`;

const ObfuscatedLabel = styled(Obfuscate)`
  color: ${props => props.theme.main};
  border-bottom: 1px dotted;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    border-bottom-style: solid;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
`;

const ContactList = ({ data }) => (
  <StyledList>
    <ContactLink>
      <ContactIcon />
      <ObfuscatedLabel
        email={data.site.siteMetadata.email}
        headers={{
          subject: "Let's be friends",
        }}
      />{' '}
      <Label href={data.gpg.publicURL}>PGP key</Label>
    </ContactLink>
    <KeybaseLink>
      <KeybaseIcon />
      <Label href="https://keybase.io/jamorin">Keybase</Label>
    </KeybaseLink>
    <GithubLink>
      <GithubIcon />
      <Label href="https://github.com/jamorin">Github</Label>
    </GithubLink>
    <LinkedinLink>
      <LinkedinIcon />
      {/* TODO update linkedin */}
      <Label href="https://github.com/jamorin">Linkedin</Label>
    </LinkedinLink>
  </StyledList>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
        gpg: file(sourceInstanceName: { eq: "files" }) {
          publicURL
        }
      }
    `}
    render={data => <ContactList data={data} {...props} />}
  />
);

ContactList.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        email: PropTypes.string.isRequired,
      }),
    }),
    gpg: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
