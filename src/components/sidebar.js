import { Link } from 'gatsby';
import { Nav } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <Nav className="justify-content-end flex-column pe-2">
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        About
      </Nav.Link>
    </Nav>
  );
}
