import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table } from 'react-bootstrap';

import NotFoundPage from 'pages/404';
import Layout from 'components/layout';
import { Fragment } from 'react';

const dataProps = {
  data: PropTypes.shape({
    articleList: PropTypes.object,
    articles: PropTypes.arrayOf(PropTypes.object)
  })
};

export function Head({ data }) {
  return (
    <Fragment>
      <title>{data?.articleList?.title}</title>
    </Fragment>
  );
}

Head.propTypes = dataProps;

export default function ArticleListing({ data }) {
  if (!data || !data.articles) {
    return <NotFoundPage />;
  }

  const {
    articleList,
    articles: { nodes }
  } = data;

  const { title, author } = articleList;

  return (
    <Layout>
      <Container>
        <Row>
          <Col md="12">
            <h1>{title}</h1>
            <h2>by {author}</h2>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {nodes.map((node) => (
                  <tr key={node.id}>
                    <td>{node.frontmatter.date}</td>
                    <td>
                      <Link to={node.frontmatter.path}>
                        {node.frontmatter.title}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

ArticleListing.propTypes = dataProps;

export const pageQuery = graphql`
  query ($pathPrefix: String!, $articleName: String!) {
    articleList: articlesJson(name: { eq: $articleName }) {
      author
      title
      description
    }

    articles: allMarkdownRemark(
      filter: { frontmatter: { path: { glob: $pathPrefix } } }
      sort: [{ frontmatter: { date: ASC } }]
    ) {
      nodes {
        id
        frontmatter {
          date
          path
          title
        }
      }
    }
  }
`;
