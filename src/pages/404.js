import { Container, Row, Col } from 'react-bootstrap';

import SEO from 'components/seo';
import Layout from 'components/layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Not Found" />
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
