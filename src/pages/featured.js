import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

const FeaturedPage = ({ data }) => {
  if (!data || !data.allWordpressPost) {
    return null;
  }

  const posts = data.allWordpressPost.edges;

  if (!posts) {
    return null;
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col md="12">
            <h1>Featured Posts</h1>
          </Col>
          {posts.map(post => {
            const { node } = post;

            return (
              <Col md="12" key={node.id}>
                <Link to={node.path}>
                  <h3>{node.title}</h3>
                </Link>
                <p className="text-muted">
                  by {node.author.name} on {node.date}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

FeaturedPage.displayName = 'FeaturedPage';
FeaturedPage.propTypes = {
  data: PropTypes.object
};

export default FeaturedPage;

export const pageQuery = graphql`
  query RecentPostQuery {
    allWordpressPost(sort: { fields: [date], order: [DESC] }) {
      totalCount
      edges {
        node {
          date
          path
          title
          content
          author {
            name
          }
        }
      }
    }
  }
`;
