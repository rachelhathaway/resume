import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({
  children,
  data: {
    site: { siteMetadata },
  },
}) => (
  <div>
    <Helmet
      title={`${siteMetadata.title} -- ${siteMetadata.description}`}
      meta={[
        { name: 'description', content: siteMetadata.description },
        {
          name: 'keywords',
          content: 'web developer, javascript, react',
        },
        {
          name: 'og:url',
          content: 'https://confident-fermat-4c3207.netlify.com/',
        },
        { name: 'og:type', content: 'article' },
        { name: 'og:title', content: siteMetadata.title },
        { name: 'og:description', content: siteMetadata.description },
        {
          name: 'og:image',
          content:
            'https://res.cloudinary.com/rachelhathaway/image/upload/c_fit,h_630,w_1200/v1447350555/hot-dogs_irwt6b.jpg',
        },
      ]}
    >
      <link
        rel="icon"
        type="image/png"
        href="https://res.cloudinary.com/rachelhathaway/image/upload/v1529549644/beers_eypvrl.png"
      />
    </Helmet>
    <Header
      siteTitle={siteMetadata.title}
      siteDescription={siteMetadata.description}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
