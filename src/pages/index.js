import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col md="12">
          <h1>Welcome to the DIY Compendium!</h1>
          <p>
            This site attempts to compile the highest quality documentation
            available for all aspects of DIY e-liquid mixing. It is managed and
            features content contributed by volunteers from the DIY community.
            We&apos;ll have featured content here soon, but for now you can
            access all of the articles using the navbar above.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
