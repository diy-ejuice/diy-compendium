const { resolve } = require('path');

const createMarkdownPages = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/markdown/page.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
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

exports.createPages = async (options) => {
  await createMarkdownPages(options);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': resolve(__dirname, 'src/components'),
        '~pages': resolve(__dirname, 'src/pages')
      }
    }
  });
};
