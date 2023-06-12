import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

import SEO from 'components/seo';
import Layout from 'components/layout';

export default function Lists({ data }) {
  const pages = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO title="Getting Rid of Most of My Flavors - Index" />
      <Container>
        <h1>Getting Rid of Most of My Flavors</h1>
        <p>
          Follow ID10-T as he attempts to recover from a serious flavor
          addiction.
        </p>
        <ListGroup>
          {pages.map((page) => (
            <ListGroupItem key={page.frontmatter.path}>
              <Link to={page.frontmatter.path}>{page.frontmatter.title}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </Layout>
  );
}

Lists.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { path: { glob: "/gromomf/*" } } }
      sort: [{ frontmatter: { date: ASC } }, { frontmatter: { path: ASC } }]
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;
