module.exports = {
  siteMetadata: {
    title: 'Jeremy Amorin',
    email: ['me', 'jeremy4morin.com'].join('@').replace('4', 'a'), // 1337 spam protection
    description: 'The personal site of Jeremy Amorin',
    keywords:
      'programming, software, engineer, developer, react, java, javascript',
    siteUrl: 'https://www.jeremyamorin.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/files/`,
      },
    },
    {
      // Really only using the manifest plugin to set the favicon and theme_color
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jeremy Amorin',
        short_name: 'Jeremy',
        start_url: '/',
        background_color: '#8c43ff',
        theme_color: '#8c43ff',
        display: 'minimal-ui',
        icon: 'src/assets/favicon_circle.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
  ],
};
