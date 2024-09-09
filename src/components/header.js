import { Link } from 'gatsby';
import { Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Fragment>
      <Navbar data-bs-theme="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className="d-flex justify-items-center">
            <Link to="/" className="text-white">
              DIY Compendium
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-3">
              <Nav.Link as={Link} to="/about">
                Who We Are
              </Nav.Link>
              <Nav.Link as={Link} to="/"></Nav.Link>
            </Nav>
            <Nav className="ms-auto d-flex justify-content-end">
              <Nav.Item className="dc-search" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
