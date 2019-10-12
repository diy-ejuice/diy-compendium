import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top diy-footer m-auto">
        <Container>
          <Row>
            <Col md="4">Copyright &copy; 2019 DIY Compendium</Col>
            <Col md="4">
              <a
                href="https://github.com/diy-ejuice/diy-compendium"
                rel="noopener noreferer"
              >
                GitHub
              </a>
            </Col>
            <Col md="4">
              Created using <a href="https://gatsbyjs.org">Gatsby</a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
