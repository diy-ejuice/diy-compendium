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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        /* eslint-disable camelcase */
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-140812424-2',
        head: true,
        anonymize: true
      }
    },
    'gatsby-plugin-sass'
  ]
};
