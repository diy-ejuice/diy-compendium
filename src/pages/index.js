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
import FeaturedPost from 'components/featuredPost';

export default function IndexPage({ data }) {
  const {
    articles: { nodes: articles },
    images: { nodes: images }
  } = data;
  const findImage = (articleName) =>
    articleName
      ? getImage(
          images.find(
            (image) => image.relativePath === `articles/${articleName}.png`
          )?.childImageSharp?.gatsbyImageData
        )
      : {};

  return (
    <Layout>
      <SEO title="Recent Articles" />
      <Container>
        <h4 className="display-4">Recent Articles</h4>
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
              {articles.map(({ children: [article] }) => (
                <Carousel.Item key={article.frontmatter.title}>
                  <FeaturedPost
                    {...article.frontmatter}
                    image={
                      <GatsbyImage
                        image={findImage(article.parent.relativeDirectory)}
                        alt={article.frontmatter.title}
                      />
                    }
                    excerpt={article.excerpt}
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
    articles: allFile(
      filter: { sourceInstanceName: { eq: "articles" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
      limit: 5
    ) {
      nodes {
        children {
          ... on MarkdownRemark {
            frontmatter {
              author
              path
              title
            }
            excerpt(pruneLength: 400)
            parent {
              ... on File {
                relativeDirectory
              }
            }
          }
        }
      }
    }

    images: allFile(
      filter: { absolutePath: { regex: "/.*images/articles/.*.png/" } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 800)
        }
      }
    }
  }
`;
