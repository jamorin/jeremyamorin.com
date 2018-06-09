module.exports = {
  siteMetadata: {
    title: 'Jeremy Amorin | Software Engineer',
    siteUrl: 'https://www.jeremyamorin.com',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400,700`, // you can also specify font weights and styles
        ],
      },
    },
    'gatsby-plugin-netlify',
  ],
}
