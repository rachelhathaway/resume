import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
      color: 'white',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          margin: 0,
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </h1>
      <div style={{ justifySelf: 'end', textAlign: 'right' }}>
        <div>816.547.5508</div>
        <a
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          href="mailto:rachel.e.hathaway@gmail.com"
        >
          rachel.e.hathaway@gmail.com
        </a>
      </div>
    </div>
  </div>
)

export default Header
