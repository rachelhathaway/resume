import React from 'react'
import Link from 'gatsby-link'

const Mentorship = ({ title, org, term }) => (
  <div>
    <div>{title}</div>
    <div>
      <a href={org.link}>{org.name}</a>
    </div>
    <div>{term}</div>
  </div>
)

export default Mentorship
