import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '../seo';
import Layout from '../layout';
import NotFoundPage from '../../pages/404';

const WordPressPageContent = ({ data }) => {
  if (!data || !data.wordpressPage) {
    return <NotFoundPage />;
  }

  const {
    wordpressPage: {
      content,
      title,
      author: { name }
    }
  } = data;

  return (
    <Layout>
      <SEO title={title} />
      <Container className="mt-5">
        <Row>
          <Col md="12" className="mt-4">
            <h1>{title}</h1>
            <h4>by {name}</h4>
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

WordPressPageContent.displayName = 'WordPressPageContent';
WordPressPageContent.propTypes = {
  data: PropTypes.object
};

export default WordPressPageContent;

export const pageQuery = graphql`
  query($path: String!) {
    wordpressPage(path: { eq: $path }) {
      title
      content
      author {
        name
      }
    }
  }
`;
