import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import NotFoundPage from 'pages/404';
import Layout from 'components/layout';
import { getReviewUrl } from 'utils';

export function Head() {
  return (
    <Fragment>
      <title>Flavor Reviews</title>
    </Fragment>
  );
}

export default function ReviewsPage({ data }) {
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
}

ReviewsPage.propTypes = {
  data: PropTypes.shape({
    allReviewsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

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
