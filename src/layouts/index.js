import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        {
          name: 'keywords',
          content: 'web developer, javascript, react',
        },
        { name: 'og:url', content: 'TBD' },
        { name: 'og:type', content: 'article' },
        { name: 'og:title', content: data.site.siteMetadata.title },
        { name: 'og:description', content: data.site.siteMetadata.description },
        {
          name: 'og:image',
          content: 'https://avatars2.githubusercontent.com/u/1024066',
        },
      ]}
    >
      <link rel="icon" type="image/png" href="/static/beers.png" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
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
