import React from 'react'
import Link from 'gatsby-link'

const Mentorship = ({ title, org, term }) => (
  <div>
    <div>
      <strong>{title}</strong> @ <a href={org.link}>{org.name}</a>
    </div>
    <div>{term}</div>
  </div>
)

export default Mentorship
