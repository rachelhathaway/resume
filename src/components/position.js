import React from 'react'
import Link from 'gatsby-link'

import './position.scss'

const Position = ({ title, company, term, location, tech, bullets }) => (
  <div className="Position">
    <header className="Position__header">
      <div>
        <div>
          <strong>{title}</strong>
        </div>
        <a href={company.link}>{company.name}</a>
      </div>
      <div>
        <div>{term}</div>
        <div>{location}</div>
      </div>
    </header>
    {tech && (
      <div>
        <em>Tech: {tech.join(', ')}</em>
      </div>
    )}
    <ul>{bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}</ul>
  </div>
)

export default Position
