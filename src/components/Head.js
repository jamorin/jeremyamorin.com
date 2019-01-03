import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Head = ({ data }) => (
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: data.site.siteMetadata.description },
      {
        name: 'keywords',
        content: data.site.siteMetadata.keywords,
      },
      {
        name: 'og:url',
        content: data.site.siteMetadata.siteUrl,
      },
    ]}
    // link={[
    //   {
    //     href: 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans',
    //     rel: 'stylesheet',
    //   },
    // ]}
  />
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `}
    render={data => <Head data={data} {...props} />}
  />
);

Head.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
