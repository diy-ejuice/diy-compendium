import {
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
    allPollJson: { nodes: polls },
    allFile: { nodes: images }
  } = data;
  const filteredNodes = nodes.filter((node) =>
    Boolean(node.frontmatter.featured)
  );
  const findImage = (url) =>
    images.find((image) =>
      image.childImageSharp.fluid.src.endsWith(
        url.substring(url.lastIndexOf('/') + 1)
      )
    ).childImageSharp.fluid;

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
              {filteredNodes.map((node) => {
                const {
                  frontmatter: { author, image, path, title, headline }
                } = node;

                return (
                  <Carousel.Item key={path}>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={5}>
                        <Img fluid={findImage(image)} />
                      </Col>
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
                  </Carousel.Item>
                );
              })}
              {polls.map((poll) => {
                const { url, title } = poll;

                return (
                  <Carousel.Item key={url}>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={{ offset: 5, size: 5 }}>
                        <div className="mt-5">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h5>{title} Poll</h5>
                          </a>
                          <p>
                            Check out the DIY Poll site for info on your
                            favorite profiles!
                          </p>
                        </div>
                      </Col>
                      <Col md={1}></Col>
                    </Row>
                  </Carousel.Item>
                );
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
    allMarkdownRemark {
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
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;

export default IndexPage;
