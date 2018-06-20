import React from 'react'
import Link from 'gatsby-link'

const Position = ({ title, company, term, location, bullets }) => (
  <div>
    <header>
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
    <ul>{bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}</ul>
  </div>
)

export default Position
