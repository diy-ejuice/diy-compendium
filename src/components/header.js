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
        <NavDropdown title="FAQ" id="dropdown-faq">
          <NavDropdown.Item>
            <Link to="/faq/why-diy">Why DIY?</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/faq/getting-started">Getting Started</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/faq/weight-vs-volume">Weight vs. Volume</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/faq/premixed-bases">Premixed Bases</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/faq/simple-recipes">Simple Recipes</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/faq/shake-and-vape">Shake and Vape</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Safety" id="dropdown-safety">
          <NavDropdown.Item>
            <Link to="/safety/nicotine">Nicotine Handling/Storage</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/safety/flavors">Flavors of Concern</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Guides" id="dropdown-guides">
          <NavDropdown.Item>
            <Link to="/guides/additives-enhancers">
              Additives &amp; Enhancers
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/bottles">Bottles</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/labels">Labels</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/calculators">Calculators</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/reviews">Reviews</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/guides/organization">Organization</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Recipes" id="dropdown-recipes">
          <NavDropdown.Item>
            <Link to="/recipes/best-of">Best of</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recipes/monthly-archive">Monthly Archive</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recipes/profiles">Profiles</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recipes/1-2-3">1-2-3</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recipes/suggestions">Suggestions</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recipes/finding-recipes">Finding Recipes</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recipes/clones">Clones</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Flavors" id="dropdown-flavors">
          <NavDropdown.Item>
            <Link to="/flavors/flavor-of-the-week">Flavor of the Week</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/flavors/reviews">Reviews</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/flavors/notes">Notes</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/flavors/facts">Facts</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/flavors/rebranding">Rebranding</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/flavors/sft">Single Flavor Testing</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/flavors/best-of">Best of</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Videos/Podcasts" id="dropdown-media">
          <NavDropdown.Item>
            <Link to="/media/videos">Videos</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/media/podcasts">Podcasts</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Supplies" id="dropdown-supplies">
          <NavDropdown.Item>
            <Link to="/supplies/vendor-list">Vendor List</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/supplies/scales">Scales</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/supplies/bottles">Bottles</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Nav className="justify-content-end">
      <Nav.Link
        href="https://reddit.com/r/DIY_eJuice"
        target="_blank"
        rel="noopener noreferrer"
      >
        /r/DIY_eJuice
      </Nav.Link>
      <Nav.Link
        href="http://link.diyejuice.org/discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord
      </Nav.Link>
    </Nav>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
