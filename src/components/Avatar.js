import React from 'react';
import { StaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../globalStyle';

const StyledImg = styled(Img).attrs({
  alt: 'Avatar',
})`
  border-radius: 10000px;
`;

const Link = styled(GatsbyLink)`
  display: flex;
  border: 3px solid transparent;
  border-radius: 10000px;
  &:hover {
    transition: all 0.3s;
    border-color: ${props => props.theme.main};
  }
`;

const activeStyle = {
  borderColor: theme.main,
};

const Avatar = ({ data }) => (
  <Link title="Home" to="/" activeStyle={activeStyle}>
    <StyledImg fixed={data.file.childImageSharp.fixed} />
  </Link>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(
          sourceInstanceName: { eq: "assets" }
          base: { eq: "avatar_square.jpg" }
        ) {
          childImageSharp {
            fixed(width: 50, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Avatar data={data} {...props} />}
  />
);

Avatar.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
