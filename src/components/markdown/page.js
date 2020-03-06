import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import NotFoundPage from '~pages/404';
import Layout from '~components/layout';

const MarkdownPage = ({ data }) => {
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
      <SEO title={title} description={title} />
      <Container>
        <Row>
          <Col md="12" dangerouslySetInnerHTML={{ __html: html }} />
        </Row>
      </Container>
    </Layout>
  );
};

MarkdownPage.displayName = 'MarkdownContent';
MarkdownPage.propTypes = {
  data: PropTypes.object
};

export default MarkdownPage;

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
