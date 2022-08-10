import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';

import SEO from 'components/seo';
import Layout from 'components/layout';
import { getListUrl } from 'utils';

export default function Lists({ data }) {
  const lists = data.allListsJson.edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO title="Flavor Lists" />
      <Container>
        <h1>Flavor Lists</h1>
        <Table striped hover>
          <thead>
            <tr>
              <th>List Name</th>
              <th>Author</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => (
              <tr key={list.code}>
                <td>
                  <Link to={getListUrl(list)}>{list.name}</Link>
                </td>
                <td>
                  <a
                    href={`https://reddit.com/u/${list.author}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {list.author}
                  </a>
                </td>
                <td>{list.dateAdded}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
}

Lists.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query {
    allListsJson {
      edges {
        node {
          name
          code
          author
          dateAdded
        }
      }
    }
  }
`;
