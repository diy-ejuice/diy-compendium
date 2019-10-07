import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="mt-5">
      <Row>
        <Col md="12">
          <h1>Welcome to the DIY Compendium!</h1>
          <p>We need some content here.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
