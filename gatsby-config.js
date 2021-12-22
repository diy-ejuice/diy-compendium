require('dotenv/config');

const manifestOptions = {
  name: 'DIY Compendium',
  /* eslint-disable camelcase */
  short_name: 'Compendium',
  start_url: '/',
  background_color: '#4582ec',
  theme_color: '#4582ec',
  /* eslint-enable camelcase */
  display: 'minimal-ui',
  icon: 'src/images/gatsby-icon.png'
};

const gtagOptions = {
  trackingId: process.env.GA_TRACKING_ID,
  head: true,
  anonymize: true
};

const algoliaOptions = {
  apiKey: process.env.DOCSEARCH_API_KEY,
  appId: process.env.DOCSEARCH_APP_ID,
  indexName: process.env.DOCSEARCH_INDEX_NAME,
  inputSelector: '.dc-search-input',
  autocompleteOptions: {
    minLength: 3
  }
};

const remarkPlugins = [
  {
    resolve: 'gatsby-remark-external-links',
    options: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 800
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
  'gatsby-remark-autolink-headers',
  'gatsby-remark-numbered-footnotes'
];

module.exports = {
  siteMetadata: {
    title: 'DIY Compendium',
    author: 'ayan4m1',
    description: 'A knowledge base with DIY e-liquid mixing information.',
    siteUrl: 'https://diyejuice.org/'
  },
  plugins: [
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'reviews',
        path: `${__dirname}/src/reviews`
      }
    },
    {
      resolve: 'gatsby-source-pg',
      options: {
        connectionString: process.env.NOTED_PG_CONNECTION_STRING,
        schema: 'public',
        refetchInterval: 60
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: gtagOptions
    },
    {
      resolve: 'gatsby-plugin-algolia-docsearch-options',
      options: algoliaOptions
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: remarkPlugins
      }
    }
  ]
};
