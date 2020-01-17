/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
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
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
