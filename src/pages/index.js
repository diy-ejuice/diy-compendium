import {
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import SEO from 'components/seo';
import Layout from 'components/layout';
import FeaturedPost from 'components/featured/post';

export default function IndexPage({ data }) {
  const {
    allMarkdownRemark: { nodes },
    allFile: { nodes: images }
  } = data;
  const findImage = (url) =>
    url
      ? getImage(
          images.find((image) =>
            image.relativePath.endsWith(url.substring(url.lastIndexOf('/') + 1))
          ).childImageSharp.gatsbyImageData
        )
      : {};

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
              {nodes.map((node) => (
                <Carousel.Item key={node.frontmatter.title}>
                  <FeaturedPost
                    {...node.frontmatter}
                    image={
                      <GatsbyImage
                        image={findImage(node.frontmatter.image)}
                        alt="Featured Post"
                      />
                    }
                    excerpt={node.excerpt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
      limit: 5
    ) {
      nodes {
        frontmatter {
          author
          featured
          image
          path
          title
        }
        excerpt(pruneLength: 400)
      }
    }

    allFile(filter: { relativeDirectory: { eq: "featured" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 800)
        }
      }
    }
  }
`;
