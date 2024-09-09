import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Accordion, Nav } from 'react-bootstrap';

function SidebarNode({ active, item }) {
  return (
    <Accordion.Item eventKey={item.name}>
      <Accordion.Header>{item.name}</Accordion.Header>
      <Accordion.Body>
        {item.items?.map?.((innerItem) => (
          <Nav.Link
            as={Link}
            to={innerItem.href}
            key={innerItem.name}
            className={
              !active ? 'bg-primary text-white rounded mb-1' : 'rounded mb-1'
            }
          >
            {innerItem.name}
          </Nav.Link>
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
}

SidebarNode.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.object
};

export default function Sidebar() {
  const data = useStaticQuery(graphql`
    query {
      sideNavItems: allSideNavYaml {
        nodes {
          name
          href
          items {
            name
            href
          }
        }
      }
    }
  `);

  return (
    <Nav className="flex-column pe-2">
      <Accordion flush>
        {data.sideNavItems?.nodes?.map?.((item) => (
          <SidebarNode key={item.name} item={item} />
        ))}
      </Accordion>
    </Nav>
  );
}
