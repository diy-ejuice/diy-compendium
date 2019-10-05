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

const createWordPressPages = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/content/wordpress.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWordpressPost {
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
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL wordpress query.');
    return;
  }

  result.data.allWordpressPost.edges.forEach(({ node }) => {
    const { content, id, path, slug, title } = node;

    // eslint-disable-next-line
    console.dir(path);
    createPage({
      context: {
        content,
        title,
        slug,
        id
      },
      component,
      path
    });
  });
};

exports.createPages = async options => {
  await createMarkdownPages(options);
  await createWordPressPages(options);
};
