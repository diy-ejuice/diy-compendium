import { Link } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Container, Navbar, Nav, InputGroup, Button } from 'react-bootstrap';
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

const menuData = {
  faq: {
    icon: faListOl,
    title: 'FAQ',
    links: [
      { to: '/faq/getting-started', title: 'Getting Started' },
      { to: '/faq/mixing-by-weight', title: 'Mixing by Weight' },
      { to: '/faq/weight-vs-volume', title: 'Weight vs. Volume' },
      { to: '/faq/premixed-bases', title: 'Premixed Bases' },
      { to: '/faq/simple-recipes', title: 'Simple Recipes' },
      { to: '/faq/shake-and-vape', title: 'Shake and Vape' }
    ]
  },
  safety: {
    icon: faHardHat,
    title: 'Safety',
    links: [
      { to: '/safety/nicotine', title: 'Nicotine' },
      { to: 'https://safety.diyejuice.org', title: 'Flavors', external: true }
    ]
  },
  guides: {
    icon: faClipboardCheck,
    title: 'Guides',
    links: [
      { to: '/guides/additives-enhancers', title: 'Additives & Enhancers' },
      { to: '/guides/labels', title: 'Labels' },
      { to: '/guides/calculators', title: 'Calculators' },
      { to: '/guides/reviews', title: 'Reviews' },
      { to: '/guides/organization', title: 'Organization' },
      { to: '/guides/nicotine-storage', title: 'Nicotine Storage' },
      { to: '/guides/sweeteners', title: 'Sweeteners' }
    ]
  },
  recipes: {
    icon: faWeight,
    title: 'Recipes',
    links: [
      { to: '/recipes/best-of', title: 'Best of' },
      { to: '/recipes/monthly-archive', title: 'Monthly Archive' },
      { to: '/recipes/1-2-3', title: '1-2-3' },
      { to: '/recipes/finding-recipes', title: 'Finding Recipes' },
      { to: '/recipes/clones', title: 'Clones' },
      { to: '/recipes/blessed-trinities', title: 'Trinities' }
    ]
  },
  flavors: {
    icon: faVial,
    title: 'Flavors',
    links: [
      { to: '/flavors/first-order', title: 'First Order' },
      { to: '/flavors/flavor-of-the-week', title: 'Flavor of the Week' },
      { to: '/lists', title: 'Lists' },
      { to: '/reviews', title: 'Reviews' },
      { to: '/flavors/notes', title: 'Notes' },
      { to: '/flavors/facts', title: 'Facts' },
      { to: '/flavors/rebranding', title: 'Rebranding' },
      { to: '/flavors/sft', title: 'Single Flavor Testing' },
      { to: '/flavors/best-of', title: 'Best of' }
    ]
  },
  media: {
    icon: faYoutube,
    title: 'Media',
    links: [
      { to: '/noted', title: 'Noted Episodes' },
      { to: '/media/videos', title: 'Videos' },
      { to: '/media/podcasts', title: 'Podcasts' }
    ]
  },
  supplies: {
    icon: faBox,
    title: 'Supplies',
    links: [
      { to: '/supplies/vendor-list', title: 'Vendor List' },
      { to: '/supplies/scales', title: 'Scales' },
      { to: '/supplies/bottles', title: 'Bottles' }
    ]
  }
};

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
      <Navbar variant="light" bg="light" className="d-none d-sm-flex">
        <Container>
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
              href="http://discord.gg/ejuice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <FontAwesomeIcon icon={faDiscord} size="lg" /> Discord
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className="d-flex d-sm-none">
            <Link to="/" className="text-light">
              {siteTitle}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-3">
              {Object.entries(menuData).map(([key, { icon, title, links }]) => (
                <NavDropdown
                  title={<TitleIcon icon={icon} title={title} />}
                  key={key}
                >
                  {links.map((link) =>
                    link.external ? (
                      <NavDropdown.Item
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item key={link.to} as={Link} to={link.to}>
                        {link.title}
                      </NavDropdown.Item>
                    )
                  )}
                </NavDropdown>
              ))}
            </Nav>
            <Nav className="justify-content-end w-100 me-2">
              <Search />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};
