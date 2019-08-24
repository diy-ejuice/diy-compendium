import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({ siteTitle }) => (
  <Navbar variant="dark" bg="primary" expand="lg">
    <Navbar.Brand>
      <Link to="/">{siteTitle}</Link>
    </Navbar.Brand>
    <Navbar.Collapse>
      <Nav>
        <Nav.Link as={Link} to="/quick-start">
          Quick Start
        </Nav.Link>
        <NavDropdown title="Guides" id="dropdown-guides">
          <NavDropdown.Item>
            <Link to="/guides/chemistry">Chemistry</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/equipment">Equipment</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/flavors">Flavors</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/videos">Videos</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Vendors" id="dropdown-vendors">
          <NavDropdown.Item>
            <Link to="/vendors/the-flavor-apprentice-tfa-tpa">
              The Flavor Apprentice
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/vendors/capella-flavors-cap">Capella Flavors</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/vendors/flavorah-flv">Flavorah</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/vendors/flavor-west-fw">Flavor West</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/troubleshooting">
          Troubleshooting
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
