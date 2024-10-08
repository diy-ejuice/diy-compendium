import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from 'components/footer';
import Header from 'components/header';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="mt-3">{children}</main>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
