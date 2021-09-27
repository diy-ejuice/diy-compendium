import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

export default function FeaturedPost({ author, image, path, title, headline }) {
  return (
    <Row>
      <Col md={1}></Col>
      <Col md={5}>{image}</Col>
      <Col md={5}>
        <div className="mt-5">
          <Link to={path}>
            <h5>{title}</h5>
          </Link>
          <p>by {author}</p>
          <p>{headline}</p>
        </div>
      </Col>
      <Col md={1}></Col>
    </Row>
  );
}

FeaturedPost.propTypes = {
  author: PropTypes.string,
  image: PropTypes.node,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string
};
