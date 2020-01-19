const { resolve } = require('path');

const createMarkdownPages = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/content/markdown.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            html
            frontmatter {
              path
              title
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      html,
      frontmatter: { path, title }
    } = node;

    createPage({
      context: {
        html,
        title
      },
      component,
      path
    });
  });
};

exports.createPages = async options => {
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
