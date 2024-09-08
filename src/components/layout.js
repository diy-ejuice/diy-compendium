import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import Footer from 'components/footer';
import Header from 'components/header';
import Sidebar from 'components/sidebar';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container fluid className="mt-3">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10}>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
