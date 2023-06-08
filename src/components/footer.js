import { format } from 'date-fns';
import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {
  const currentYear = format(Date.now(), 'yyyy');

  return (
    <footer className="my-md-4 pt-md-4 border-top diy-footer m-auto">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            Copyright &copy; {currentYear} DIY Compendium
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
