import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from 'components/layout';

export function Head() {
  return (
    <Fragment>
      <title>Not Found</title>
    </Fragment>
  );
}

export default function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md="12">
            <h1>Not Found</h1>
            <p>Sorry, this URL is not valid.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
