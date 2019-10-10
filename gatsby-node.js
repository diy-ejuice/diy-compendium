const { resolve } = require('path');
const omit = require('lodash.omit');

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

const createWordPressPages = async ({ actions, graphql, reporter }) => {
  const postComponent = resolve('src/components/content/wordpress/post.js');
  const pageComponent = resolve('src/components/content/wordpress/page.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWordpressPost(limit: 1000) {
        edges {
          node {
            id
            path
            title
            status
            content
            excerpt
            date
            modified
            author {
              id
              name
              avatar_urls {
                wordpress_24
                wordpress_48
                wordpress_96
              }
            }
          }
        }
      }

      allWordpressPage(limit: 1000) {
        edges {
          node {
            id
            path
            title
            status
            content
            excerpt
            date
            modified
            author {
              id
              name
              avatar_urls {
                wordpress_24
                wordpress_48
                wordpress_96
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL wordpress query.');
    return;
  }

  const postFromNodes = ({ node }) => {
    const { id, path } = node;

    reporter.info(`Mapped ${id} to ${path}`);
    createPage({
      context: omit(node, ['path']),
      component: postComponent,
      path
    });
  };

  const pageFromNodes = ({ node }) => {
    const { id, path } = node;

    reporter.info(`Mapped ${id} to ${path}`);
    createPage({
      context: omit(node, ['path']),
      component: pageComponent,
      path
    });
  };

  result.data.allWordpressPost.edges.forEach(postFromNodes);
  result.data.allWordpressPage.edges.forEach(pageFromNodes);
};

exports.createPages = async options => {
  await createMarkdownPages(options);
  await createWordPressPages(options);
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
