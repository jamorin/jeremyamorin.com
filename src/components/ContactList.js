import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { FaRegEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import PropTypes from 'prop-types';

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

const Label = styled.a`
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
      <Label
        href={`mailto:${data.site.siteMetadata.email}?subject=Let's be friends`}
      >
        {data.site.siteMetadata.email}
      </Label>{' '}
      <Label href={data.gpg.publicURL}>PGP key</Label>
    </ContactLink>
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