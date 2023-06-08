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

  const featured = [];

  featured.push.apply(
    featured,
    nodes.slice(0, Math.min(nodes.length, 5)).map((node) => ({
      ...node.frontmatter,
      type: 'post',
      image: (
        <GatsbyImage
          image={findImage(node.frontmatter.image)}
          alt="Featured Post"
        />
      )
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
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
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
