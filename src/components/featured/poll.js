import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

export default function FeaturedPoll({ image, title, url }) {
  return (
    <Row>
      <Col md={1}></Col>
      <Col md={5}>{image}</Col>
      <Col md={5}>
        <div className="mt-5">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h5>{title} Poll</h5>
          </a>
          <p>Check out the DIY Poll site for info on your favorite profiles!</p>
        </div>
      </Col>
      <Col md={1}></Col>
    </Row>
  );
}

FeaturedPoll.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
