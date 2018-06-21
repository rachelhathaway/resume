import React from 'react'
import Link from 'gatsby-link'

import './header.scss'

const Header = ({ siteTitle, siteDescription }) => (
  <div className="Header">
    <div className="Header__wrapper">
      <div>
        <h1 className="Header__title">{siteTitle}</h1>
        <h2 className="Header__description">{siteDescription}</h2>
        <hr />
      </div>
      <div className="Header__contact">
        <div className="Header__phone">816.547.5508</div>
        <a className="Header__email" href="mailto:rachel.e.hathaway@gmail.com">
          rachel.e.hathaway@gmail.com
        </a>
      </div>
    </div>
  </div>
)

export default Header
