import { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import NotFoundPage from 'pages/404';
import Layout from 'components/layout';

const dataProps = {
  data: PropTypes.shape({
    article: PropTypes.arrayOf(PropTypes.object)
  })
};

export function Head({ data }) {
  return (
    <Fragment>
      <title>{data?.article?.frontmatter?.title}</title>
    </Fragment>
  );
}

Head.propTypes = dataProps;

export default function Article({ data }) {
  if (!data || !data.article) {
    return <NotFoundPage />;
  }

  const {
    article: {
      html,
      frontmatter: { author, title }
    }
  } = data;

  return (
    <Layout>
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

Article.propTypes = dataProps;

export const pageQuery = graphql`
  query ($path: String!) {
    article: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        title
        description
      }
    }
  }
`;
