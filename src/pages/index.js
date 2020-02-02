import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SEO from '~components/seo';
import Layout from '~components/layout';
import {
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons';

const IndexPage = ({ data }) => (
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
            <Carousel.Item>
              <Row>
                <Col md={1}></Col>
                <Col md={5}>
                  <Img
                    fixed={data.file.childImageSharp.fixed}
                    className="float-left"
                  />
                </Col>
                <Col md={5}>
                  <div className="mt-5">
                    <h5>Flavor Review</h5>
                    <p>by forment_live</p>
                    <p>Fo spouts some bullshit about a terrible apple pie.</p>
                  </div>
                </Col>
                <Col md={1}></Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={1}></Col>
                <Col md={5}>
                  <Img
                    fixed={data.file.childImageSharp.fixed}
                    className="float-left"
                  />
                </Col>
                <Col md={5}>
                  <div className="mt-5">
                    <h5>More Apple Pie?!</h5>
                    <p>by apexipoo</p>
                    <p>Why do we care?</p>
                  </div>
                </Col>
                <Col md={1}></Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    file(relativePath: { eq: "apple-pie-v2.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;
