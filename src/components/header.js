import { Link } from 'gatsby';
import { Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import {
//   faListOl,
//   faHardHat,
//   faClipboardCheck,
//   faWeight,
//   faVial,
//   faBox,
//   faNewspaper
// } from '@fortawesome/free-solid-svg-icons';

// import TitleIcon from 'components/titleIcon';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';

/*const menuData = {
  faq: {
    icon: faListOl,
    title: 'FAQ',
    links: [
      { to: '/faq/why-diy', title: 'Why DIY?' },
      { to: '/faq/getting-started', title: 'Getting Started' },
      { to: '/faq/weight-vs-volume', title: 'Weight vs. Volume' },
      { to: '/faq/mixing-by-weight', title: 'Mixing by Weight' }
    ]
  },
  safety: {
    icon: faHardHat,
    title: 'Safety',
    links: [
      { to: '/safety/nicotine', title: 'Nicotine' },
      { to: 'https://safety.ejoose.org', title: 'Flavors', external: true }
    ]
  },
  guides: {
    icon: faClipboardCheck,
    title: 'Guides',
    links: [
      { to: '/guides/sweeteners', title: 'Sweeteners' },
      { to: '/guides/additives-enhancers', title: 'Additives & Enhancers' },
      { to: '/guides/calculators', title: 'Calculators' },
      { to: '/guides/labels', title: 'Labels' },
      { to: '/guides/reviews', title: 'Reviews' },
      { to: '/guides/organization', title: 'Organization' },
      { to: '/guides/nicotine-storage', title: 'Nicotine Storage' }
    ]
  },
  recipes: {
    icon: faWeight,
    title: 'Recipes',
    links: [
      { to: '/recipes/best-of', title: 'Best of' },
      { to: '/recipes/monthly-archive', title: 'Monthly Archive' },
      { to: '/recipes/finding-recipes', title: 'Finding Recipes' },
      { to: '/recipes/clones', title: 'Clones' },
      { to: '/recipes/blessed-trinities', title: 'Trinities' },
      { to: '/recipes/1-2-3', title: '1-2-3' },
      { to: '/recipes/simple-recipes', title: 'Simple Recipes' },
      { to: '/recipes/shake-and-vape', title: 'Shake and Vape' }
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
  articles: {
    icon: faNewspaper,
    title: 'Articles',
    links: [
      { to: '/flavor-friday', title: 'Flavor Friday' },
      { to: '/tutorial-tuesday', title: 'Tutorial Tuesday' },
      { to: '/gromomf', title: 'Getting Rid of Most of My Flavors' }
    ]
  },
  media: {
    icon: faYoutube,
    title: 'Media',
    links: [
      { to: '/flavors/flavor-of-the-week', title: 'Noted Episodes' },
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
      { to: '/supplies/bottles', title: 'Bottles' },
      { to: '/supplies/premixed-bases', title: 'Premixed Bases' }
    ]
  }
};*/

export default function Header() {
  return (
    <Fragment>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">DIY Compendium</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-3">
              {/* Object.entries(menuData).map(([key, { icon, title, links }]) => (
                <NavDropdown
                  title={<TitleIcon icon={icon} title={title} />}
                  key={key}
                >
                  {links.map((link) =>
                    link.external ? (
                      <NavDropdown.Item
                        key={link.to}
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
              )) */}
            </Nav>
            <Nav className="justify-content-end w-100">
              <Nav.Item className="dc-search" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
