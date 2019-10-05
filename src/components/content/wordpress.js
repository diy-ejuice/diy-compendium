import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '../seo';
import Layout from '../layout';
import NotFoundPage from '../../pages/404';

const WordPressContent = ({ data }) => {
  if (!data || !data.WordpressPost) {
    return <NotFoundPage />;
  }

  const {
    WordpressPost: { content, title }
  } = data;

  return (
    <Layout>
      <SEO title={title} />
      <Container className="mt-5">
        <Row>
          <Col md="12" dangerouslySetInnerHTML={{ __html: content }} />
        </Row>
      </Container>
    </Layout>
  );
};

WordPressContent.displayName = 'WordPressContent';
WordPressContent.propTypes = {
  data: PropTypes.object
};

export default WordPressContent;

export const pageQuery = graphql`
  query($path: String!) {
    wordpressPost(path: { eq: $path }) {
      content
      title
      slug
      id
    }
  }
`;
