import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import SEO from 'components/seo';
import NotFoundPage from 'pages/404';
import Layout from 'components/layout';

const ReviewPage = ({ data }) => {
  if (!data || !data.reviewsJson) {
    return <NotFoundPage />;
  }

  const {
    reviewsJson: {
      author,
      markdown,
      title,
      vendor: { name },
      url
    }
  } = data;

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Row>
          <Col>
            <h1>
              {name} {title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{author}</h2>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href={url} target="_blank" rel="nofollow noreferrer">
              Original Review
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

ReviewPage.displayName = 'ReviewPage';
ReviewPage.propTypes = {
  data: PropTypes.shape({
    reviewsJson: PropTypes.arrayOf(PropTypes.object)
  })
};

export default ReviewPage;

export const pageQuery = graphql`
  query ($title: String!, $code: String!) {
    reviewsJson(title: { eq: $title }, vendor: { code: { eq: $code } }) {
      markdown
      author
      title
      url
      vendor {
        name
        code
      }
    }
  }
`;
