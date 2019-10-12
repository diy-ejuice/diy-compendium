import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import './page.scss';
import SEO from '~components/seo';
import NotFoundPage from '~pages/404';
import Layout from '~components/layout';

const WordPressPageContent = ({ data }) => {
  if (!data || !data.wordpressPage) {
    return <NotFoundPage />;
  }

  const {
    wordpressPage: { content, title }
  } = data;

  return (
    <Layout>
      <SEO title={title} />
      <Container className="mt-5">
        <Row>
          <Col md="12" className="mt-4">
            <h1>{title}</h1>
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
      date
      title
      content
      modified
      author {
        name
      }
    }
  }
`;
