require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'DIY Compendium',
    description: 'A knowledge base with DIY e-liquid mixing information.',
    author: '@ayan4m1',
    siteUrl: 'https://diyejuice.org'
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'links',
        path: `${__dirname}/src/links`
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DIY Compendium',
        /* eslint-disable camelcase */
        short_name: 'Compendium',
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
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: true
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                table: 'table table-striped'
              }
            }
          },
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-algolia-docsearch-options',
      options: {
        apiKey: process.env.DOCSEARCH_API_KEY,
        appId: process.env.DOCSEARCH_APP_ID,
        indexName: process.env.DOCSEARCH_INDEX_NAME,
        inputSelector: '.dc-search-input',
        autocompleteOptions: {
          minLength: 3
        }
      }
    }
  ]
};
