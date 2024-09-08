import { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from 'react-bootstrap';

import NotFoundPage from 'pages/404';
import Layout from 'components/layout';

const dataProps = {
  data: PropTypes.shape({
    reviewsJson: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        markdown: PropTypes.string,
        title: PropTypes.string,
        vendor: PropTypes.shape({
          name: PropTypes.string
        }),
        url: PropTypes.string
      })
    )
  })
};

export function Head({ data }) {
  return (
    <Fragment>
      <title>{data?.reviewsJson?.title}</title>
      {/* `A review of ${name} ${title} by ${author}` */}
    </Fragment>
  );
}

Head.propTypes = dataProps;

export default function ReviewPage({ data }) {
  if (!data || !data.reviewsJson) {
    return <NotFoundPage />;
  }

  const {
    reviewsJson: { author, markdown, title, url }
  } = data;

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>
              {name} {title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{author}</h2>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href={url} target="_blank" rel="nofollow noreferrer">
              Original Review
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

ReviewPage.propTypes = dataProps;

export const pageQuery = graphql`
  query ($title: String!, $code: String!) {
    reviewsJson(title: { eq: $title }, vendor: { code: { eq: $code } }) {
      markdown
      author
      title
      url
      vendor {
        name
        code
      }
    }
  }
`;
