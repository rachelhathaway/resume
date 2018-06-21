import React from 'react'
import Link from 'gatsby-link'

import './position.scss'

const Position = ({ title, company, term, location, tech, bullets }) => (
  <div className="Position">
    <header className="Position__header">
      <div>
        <strong>{title}</strong> @{' '}
        <a href={company.link}>
          <span className="Position__co-abbr">
            {company.abbr || company.name}
          </span>
          <span className="Position__co-full">{company.name}</span>
        </a>
      </div>
      <div className="Position__meta">
        <div className="Position__term">{term}</div>
        <div className="Position__location">{location}</div>
      </div>
    </header>
    {tech && (
      <div className="Position__tech">
        <em>Tech: {tech.join(', ')}</em>
      </div>
    )}
    <ul style={{ listStyleType: 'square' }}>
      {bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}
    </ul>
  </div>
)

export default Position
