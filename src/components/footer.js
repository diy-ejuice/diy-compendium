import { Link } from 'gatsby';
import { format } from 'date-fns';
import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.currentYear = format(Date.now(), 'yyyy');
  }

  render() {
    return (
      <footer className="my-md-4 pt-md-4 border-top diy-footer m-auto">
        <Container>
          <Row>
            <Col md="6">
              <h5>Resources</h5>
              <Container>
                <Row>
                  <Col md="6">
                    <ul className="list-unstyled text-small text-center">
                      <li>
                        <Link to="/quick-start" className="text-muted">
                          Quick Start
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq" className="text-muted">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link to="/safety" className="text-muted">
                          Safety
                        </Link>
                      </li>
                      <li>
                        <Link to="/guides" className="text-muted">
                          Guides
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md="6">
                    <ul className="list-unstyled text-small text-center">
                      <li>
                        <Link to="/recipes" className="text-muted">
                          Recipes
                        </Link>
                      </li>
                      <li>
                        <Link to="/flavors" className="text-muted">
                          Flavors
                        </Link>
                      </li>
                      <li>
                        <Link to="/media" className="text-muted">
                          Videos/Podcasts
                        </Link>
                      </li>
                      <li>
                        <Link to="/supplies" className="text-muted">
                          Supplies
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="6">
              <h5>About</h5>
              <ul className="list-unstyled text-small text-center">
                <li>
                  <Link to="/about-us" className="text-muted">
                    About the site
                  </Link>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://github.com/diy-ejuice/diy-compendium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="http://link.diyejuice.org/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="text-center">
              Copyright &copy; {this.currentYear} DIY Compendium
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
