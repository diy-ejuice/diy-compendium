require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'DIY Compendium',
    description: 'A knowledge base with DIY e-liquid mixing information.',
    author: '@ayan4m1'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs`
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WP_BASE_URL,
        protocol: 'http',
        useACF: false,
        auth: {
          /* eslint-disable camelcase */
          jwt_user: process.env.WP_JWT_USER,
          jwt_pass: process.env.WP_JWT_PASSWORD
          /* eslint-enable camelcase */
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        /* eslint-disable camelcase */
        short_name: 'starter',
        start_url: '/',
        background_color: '#4582ec',
        theme_color: '#4582ec',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-140812424-2',
        head: true,
        anonymize: true
      }
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-eslint'
  ]
};
