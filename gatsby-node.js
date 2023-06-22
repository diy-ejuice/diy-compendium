const { resolve } = require('path');
const { getReviewUrl, getListUrl } = require('./src/utils');

const createListPages = async ({ actions, graphql, reporter }) => {
  const component = resolve(`src/components/list.js`);
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allListsJson {
        nodes {
          code
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  let counter = 0;

  result.data.allListsJson.nodes.forEach((node) => {
    const path = getListUrl(node);

    reporter.info(`Created page for ${path}`);
    counter++;
    createPage({
      context: node,
      component,
      path
    });
  });

  reporter.info(`Created ${counter} list pages!`);
};
const createArticlePages = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/article.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
            headings(depth: h1) {
              value
            }
            html
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL markdown query.');
    return;
  }

  let counter = 0;

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      frontmatter: { path, title },
      headings,
      html
    } = node;

    if (!path) {
      reporter.warn(
        `Did not find a path in the frontmatter of ${
          headings.length ? headings[0].value : 'unknown page'
        }`
      );
      return;
    }

    counter++;
    createPage({
      context: {
        html,
        title
      },
      component,
      path
    });
  });

  reporter.info(`Created ${counter} markdown pages!`);
};
const createArticleListings = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/articleListing.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allDirectory(
        filter: {
          sourceInstanceName: { eq: "articles" }
          relativePath: { ne: "" }
        }
      ) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL markdown query.');
    return;
  }

  let counter = 0;

  result.data.allDirectory.edges.forEach(({ node }) => {
    const { relativePath } = node;

    counter++;
    createPage({
      context: {
        pathPrefix: `/${relativePath}/*`,
        articleName: relativePath
      },
      component,
      path: `/${relativePath}`
    });
  });

  reporter.info(`Created ${counter} article index pages!`);
};
const createReviewPages = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/review.js');
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allReviewsJson {
        edges {
          node {
            title
            vendor {
              name
              code
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL markdown query.');
    return;
  }

  let counter = 0;

  result.data.allReviewsJson.edges.forEach(({ node }) => {
    const {
      title,
      vendor: { code }
    } = node;
    const path = getReviewUrl(node);

    reporter.info(`creating page @ ${path}`);

    counter++;
    createPage({
      context: {
        code,
        title
      },
      component,
      path
    });
  });

  reporter.info(`Created ${counter} review pages!`);
};

exports.createPages = async (options) => {
  await createArticleListings(options);
  await createArticlePages(options);
  await createReviewPages(options);
  await createListPages(options);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, 'src'), 'node_modules']
    }
  });
};
