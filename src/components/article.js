import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from 'components/seo';
import NotFoundPage from 'pages/404';
import Layout from 'components/layout';

export default function Article({ data }) {
  if (!data || !data.markdownRemark) {
    return <NotFoundPage />;
  }

  const {
    markdownRemark: {
      html,
      frontmatter: { author, title, description }
    }
  } = data;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Container>
        <Row>
          {title && (
            <Col md="12">
              <h1>{title}</h1>
            </Col>
          )}
          {author && (
            <Col md="12">
              <h2 className="mt-0 mb-4">
                by{' '}
                <a
                  href={`https://reddit.com/user/${author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /u/{author}
                </a>
              </h2>
            </Col>
          )}
          <Col md="12" dangerouslySetInnerHTML={{ __html: html }} />
        </Row>
      </Container>
    </Layout>
  );
}

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.arrayOf(PropTypes.object)
  })
};

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        title
        description
      }
    }
  }
`;
