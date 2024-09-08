import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Container, Table } from 'react-bootstrap';

import Layout from 'components/layout';
import { getListUrl } from 'utils';

const dataProps = {
  data: PropTypes.shape({
    lists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        code: PropTypes.string,
        author: PropTypes.string,
        dateAdded: PropTypes.string
      })
    )
  })
};

export function Head() {
  return (
    <Fragment>
      <title>Flavor Lists</title>
    </Fragment>
  );
}

export default function Lists({ data }) {
  const lists = data?.lists?.nodes;

  return (
    <Layout>
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

Lists.propTypes = dataProps;

export const pageQuery = graphql`
  query {
    lists: allListsJson {
      nodes {
        name
        code
        author
        dateAdded
      }
    }
  }
`;
