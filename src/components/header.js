import { Link } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Navbar, Nav, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faListOl,
  faHardHat,
  faClipboardCheck,
  faWeight,
  faVial,
  faBox
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faRedditAlien,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import NavDropdown from 'react-bootstrap/NavDropdown';
import TitleIcon from './titleIcon';

const Faq = () => (
  <NavDropdown
    title={<TitleIcon icon={faListOl} title="FAQ" />}
    id="dropdown-faq"
  >
    <NavDropdown.Item as={Link} to="/faq/getting-started">
      Getting Started
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/faq/mixing-by-weight">
      Mixing by Weight
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/faq/weight-vs-volume">
      Weight vs. Volume
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/faq/premixed-bases">
      Premixed Bases
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/faq/simple-recipes">
      Simple Recipes
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/faq/shake-and-vape">
      Shake and Vape
    </NavDropdown.Item>
  </NavDropdown>
);

const Safety = () => (
  <NavDropdown
    title={<TitleIcon icon={faHardHat} title="Safety" />}
    id="dropdown-safety"
  >
    <NavDropdown.Item as={Link} to="/safety/nicotine">
      Nicotine
    </NavDropdown.Item>
    <NavDropdown.Item
      href="https://safety.diyejuice.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Flavors
    </NavDropdown.Item>
  </NavDropdown>
);

const Guides = () => (
  <NavDropdown
    title={<TitleIcon icon={faClipboardCheck} title="Guides" />}
    id="dropdown-guides"
  >
    <NavDropdown.Item as={Link} to="/guides/additives-enhancers">
      Additives &amp; Enhancers
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/guides/labels">
      Labels
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/guides/calculators">
      Calculators
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/guides/reviews">
      Review
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/guides/organization">
      Organization
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/guides/nicotine-storage">
      Nicotine Storage
    </NavDropdown.Item>
  </NavDropdown>
);

const Recipes = () => (
  <NavDropdown
    title={<TitleIcon icon={faWeight} title="Recipes" />}
    id="dropdown-recipes"
  >
    <NavDropdown.Item as={Link} to="/recipes/best-of">
      Best of
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/recipes/monthly-archive">
      Monthly Archive
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/recipes/profiles">
      Profiles
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/recipes/1-2-3">
      1-2-3
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/recipes/suggestions">
      Suggestions
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/recipes/finding-recipes">
      Finding Recipes
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/recipes/clones">
      Clones
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/recipes/blessed-trinities">
      Trinities
    </NavDropdown.Item>
  </NavDropdown>
);

const Flavors = () => (
  <NavDropdown
    title={<TitleIcon icon={faVial} title="Flavors" />}
    id="dropdown-flavors"
  >
    <NavDropdown.Item as={Link} to="/flavors/first-order">
      First Order
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/flavors/flavor-of-the-week">
      Flavor of the Week
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/flavors/reviews">
      Reviews
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/flavors/notes">
      Notes
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/flavors/facts">
      Facts
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/flavors/rebranding">
      Rebranding
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/flavors/sft">
      Single Flavor Testing
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/flavors/best-of">
      Best of
    </NavDropdown.Item>
  </NavDropdown>
);

const Media = () => (
  <NavDropdown
    title={<TitleIcon icon={faYoutube} title="Media" />}
    id="dropdown-media"
  >
    <NavDropdown.Item as={Link} to="/media/videos">
      Videos
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/media/podcasts">
      Podcasts
    </NavDropdown.Item>
  </NavDropdown>
);

const Supplies = () => (
  <NavDropdown
    title={<TitleIcon icon={faBox} title="Supplies" />}
    id="dropdown-supplies"
  >
    <NavDropdown.Item as={Link} to="/supplies/vendor-list">
      Vendor List
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/supplies/scales">
      Scales
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/supplies/bottles">
      Bottles
    </NavDropdown.Item>
  </NavDropdown>
);

const Search = (props) => {
  const baseClass = 'dc-search';
  const classes = classNames(baseClass, [
    props.mobile ? 'd-lg-none' : 'd-lg-block'
  ]);

  return (
    <Nav.Item className={classes}>
      <InputGroup>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} size="sm" />
        </InputGroup.Text>
        <input type="search" className="dc-search-input form-control" />
      </InputGroup>
    </Nav.Item>
  );
};

Search.propTypes = {
  mobile: PropTypes.bool
};

export default function Header({ siteTitle = '' }) {
  return (
    <Fragment>
      <Navbar variant="light" bg="light">
        <Navbar.Brand className="ms-4">
          <Link to="/">{siteTitle}</Link>
        </Navbar.Brand>
        <Nav className="justify-content-end w-100">
          <Nav.Link as={Link} to="/faq/why-diy">
            <Button variant="secondary">Why DIY?</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            <Button variant="secondary">About</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/quick-start">
            <Button variant="secondary">Quick Start</Button>
          </Nav.Link>
          <Nav.Link
            href="https://reddit.com/r/DIY_eJuice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <FontAwesomeIcon icon={faRedditAlien} size="lg" /> /r/DIY_eJuice
            </Button>
          </Nav.Link>
          <Nav.Link
            href="http://link.diyejuice.org/discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <FontAwesomeIcon icon={faDiscord} size="lg" /> Discord
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-3">
            <Faq />
            <Safety />
            <Guides />
            <Recipes />
            <Flavors />
            <Media />
            <Supplies />
          </Nav>
          <Nav className="justify-content-end w-100 me-2">
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};
