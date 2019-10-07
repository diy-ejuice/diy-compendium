import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import NotFoundPage from '~pages/404';
import Layout from '~components/layout';

const WordPressPostContent = ({ data }) => {
  if (!data || !data.wordpressPost) {
    return <NotFoundPage />;
  }

  const {
    wordpressPost: {
      content,
      title,
      date: rawDate,
      author: { name }
    }
  } = data;

  const parsed = parseISO(rawDate);
  const date = format(parsed, "yyyy-MM-dd' at 'HH:mm:ss");

  return (
    <Layout>
      <SEO title={title} />
      <Container className="mt-5">
        <Row>
          <Col md="12" className="mt-4">
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="mt-2 mb-2">
            Posted on {date} by {name}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col
            md="12"
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Row>
      </Container>
    </Layout>
  );
};

WordPressPostContent.displayName = 'WordPressPostContent';
WordPressPostContent.propTypes = {
  data: PropTypes.object
};

export default WordPressPostContent;

export const pageQuery = graphql`
  query($path: String!) {
    wordpressPost(path: { eq: $path }) {
      date
      title
      content
      author {
        name
      }
    }
  }
`;
