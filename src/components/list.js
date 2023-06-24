import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import { ReactCountryFlag } from 'react-country-flag';

import Layout from 'components/layout';
import SEO from 'components/seo';

export default function ListPage({ data }) {
  const vendors = data.vendors.nodes;
  const flavors = data.list.flavors.map((flavor) => {
    const vendor = vendors.find((vend) => vend.code === flavor.vendorCode);

    return {
      ...flavor,
      vendor
    };
  });

  const { name, author, description } = data.list;

  return (
    <Layout>
      <SEO title={name} />
      <Container>
        <h1>{name}</h1>
        <h3>
          by{' '}
          <a
            href={`https://reddit.com/u/${author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author}
          </a>
        </h3>
        {description && <p>{description}</p>}
        <Table striped hover>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Flavor</th>
              <th>ATF Average %</th>
            </tr>
          </thead>
          <tbody>
            {flavors.map((flavor) => (
              <Fragment key={flavor.flavorName}>
                <tr>
                  <td>
                    {flavor.vendor ? (
                      <Fragment>
                        {flavor.vendor.country && (
                          <ReactCountryFlag
                            countryCode={flavor.vendor.country}
                            svg
                            style={{
                              fontSize: '32px'
                            }}
                          />
                        )}{' '}
                        <span>
                          {flavor.vendor.url ? (
                            <a
                              href={flavor.vendor.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {flavor.vendor.name}
                            </a>
                          ) : (
                            flavor.vendor.name
                          )}
                        </span>
                      </Fragment>
                    ) : (
                      flavor.vendorCode
                    )}
                  </td>
                  <td>{flavor.flavorName}</td>
                  <td>{flavor.atfAverage}</td>
                </tr>
                {flavor.note && (
                  <tr>
                    <td colSpan={3}>
                      <Card bg="info" text="white">
                        <Card.Body>{flavor.note}</Card.Body>
                      </Card>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
}

ListPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ($code: String) {
    list: listsJson(code: { eq: $code }) {
      name
      description
      author
      flavors {
        vendorCode
        flavorName
        atfAverage
        note
      }
    }

    vendors: allVendorsJson {
      nodes {
        code
        country
        name
        url
      }
    }
  }
`;
