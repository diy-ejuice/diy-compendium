import { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import SEO from 'components/seo';
import NotFoundPage from 'pages/404';
import Layout from 'components/layout';
import { getReviewUrl } from 'utils';

const ReviewsPage = ({ data }) => {
  if (!data || !data.allReviewsJson) {
    return <NotFoundPage />;
  }
  const vendors = [];
  const reviews = new Map();

  for (const { node } of data.allReviewsJson.edges) {
    const {
      vendor: { code }
    } = node;

    if (!vendors.find((vendor) => vendor.code === code)) {
      vendors.push(node.vendor);
      reviews.set(code, []);
    }

    reviews.get(code).push(node);
  }

  return (
    <Layout>
      <SEO title="Flavor Reviews" />
      <Container>
        <Row>
          <Col md="12">
            <h1>Flavor Reviews</h1>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {vendors.map((vendor) => (
              <Fragment key={vendor.code}>
                <h2>{vendor.name}</h2>
                <ListGroup>
                  {reviews.get(vendor.code).map((review) => (
                    <ListGroupItem
                      key={`${review.vendor.code}-${review.title}`}
                    >
                      <Link to={getReviewUrl(review)}>{review.title}</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

ReviewsPage.displayName = 'ReviewsPage';
ReviewsPage.propTypes = {
  data: PropTypes.shape({
    allReviewsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

export default ReviewsPage;

export const pageQuery = graphql`
  query {
    allReviewsJson {
      edges {
        node {
          title
          vendor {
            name
            code
          }
        }
      }
    }
  }
`;
