import {
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';
import FeaturedPoll from '~components/featured/poll';
import FeaturedPost from '~components/featured/post';

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
    allPollJson: { nodes: polls },
    allFile: { nodes: images }
  } = data;
  const findImage = (url) =>
    url
      ? images.find((image) =>
          image.childImageSharp.fluid.src.endsWith(
            url.substring(url.lastIndexOf('/') + 1)
          )
        ).childImageSharp.fluid
      : {};

  const featured = [];

  featured.push.apply(
    featured,
    nodes.slice(0, Math.min(nodes.length, 5)).map((node) => ({
      ...node.frontmatter,
      type: 'post',
      image: findImage(node.frontmatter.image)
    }))
  );

  featured.push.apply(
    featured,
    polls.map((poll) => ({
      ...poll,
      type: 'poll',
      image: findImage('/diy-poll.png')
    }))
  );

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h4 className="display-4">Featured Content</h4>
        <Row className="justify-content-center">
          <Col md={10}>
            <Carousel
              indicators={false}
              className="mt-5"
              nextIcon={
                <FontAwesomeIcon icon={faArrowCircleRight} color="black" />
              }
              prevIcon={
                <FontAwesomeIcon icon={faArrowCircleLeft} color="black" />
              }
            >
              {featured.map((node) => {
                const { type } = node;

                switch (type) {
                  case 'post':
                    return (
                      <Carousel.Item key={node.title}>
                        <FeaturedPost {...node} />
                      </Carousel.Item>
                    );
                  case 'poll':
                    return (
                      <Carousel.Item key={node.title}>
                        <FeaturedPoll {...node} />
                      </Carousel.Item>
                    );
                  default:
                    return null;
                }
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          author
          featured
          headline
          image
          path
          title
        }
      }
    }

    allPollJson {
      nodes {
        url
        title
      }
    }

    allFile(filter: { relativeDirectory: { eq: "featured" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default IndexPage;
