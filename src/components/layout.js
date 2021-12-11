import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { SSRProvider } from 'react-bootstrap';

import Footer from 'components/footer';
import Header from 'components/header';

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
    <SSRProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="mt-3">{children}</main>
      <Footer />
    </SSRProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
