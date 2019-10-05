import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '../seo';
import Layout from '../layout';
import NotFoundPage from '../../pages/404';

const MarkdownContent = ({ data }) => {
  if (!data || !data.markdownRemark) {
    return <NotFoundPage />;
  }

  const {
    markdownRemark: {
      html,
      frontmatter: { title }
    }
  } = data;

  return (
    <Layout>
      <SEO title={title} />
      <Container className="mt-5">
        <Row>
          <Col md="12" dangerouslySetInnerHTML={{ __html: html }} />
        </Row>
      </Container>
    </Layout>
  );
};

MarkdownContent.displayName = 'Content';
MarkdownContent.propTypes = {
  data: PropTypes.object
};

export default MarkdownContent;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
