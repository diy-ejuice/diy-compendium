import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Table } from 'react-bootstrap';

import Layout from '~components/layout';
import SEO from '~components/seo';

export default function NotedPage({ data }) {
  const episodes = data.postgres.allEpisodes.nodes.map((episode) => ({
    ...episode,
    guests: data.postgres.allEpisodeUsers.nodes
      .filter(
        (episodeUser) => episodeUser.episodeByEpisodeId.date === episode.date
      )
      .map((episodeUser) => episodeUser.discordUserByDiscordUserId.username)
      .join(', ')
  }));

  return (
    <Layout>
      <SEO title="Noted Episodes" />
      <Container>
        <h1>Noted Episodes</h1>
        <Table striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Guests</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr key={episode.id}>
                <td>{episode.date}</td>
                <td>{episode.name}</td>
                <td>{episode.guests}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
}

NotedPage.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query {
    postgres {
      allEpisodes {
        nodes {
          id
          name
          date
        }
      }

      allEpisodeUsers {
        nodes {
          episodeByEpisodeId {
            date
          }
          discordUserByDiscordUserId {
            username
          }
        }
      }
    }
  }
`;
