import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

import '../index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
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
