import React from 'react'
import Link from 'gatsby-link'
import Mentorship from '../components/mentorship'
import Position from '../components/position'

import education from '../data/education'
import positions from '../data/experience'
import { upcoming, previous } from '../data/mentorship'

const IndexPage = ({ data }) => (
  <div>
    <section>
      <h2>Work Experience</h2>
      <ul>
        {positions.map((position, idx) => (
          <li>
            <Position {...position} />
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Mentorship</h2>
      <h3>Upcoming</h3>
      <ul>
        {upcoming.map(mentorship => (
          <li>
            <Mentorship {...mentorship} />
          </li>
        ))}
      </ul>
      <h3>Upcoming</h3>
      <ul>
        {previous.map(mentorship => (
          <li>
            <Mentorship {...mentorship} />
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Education</h2>
      <div>
        <div>
          {education.degree}, {education.date}
        </div>
        <div>{education.school}</div>
      </div>
    </section>
  </div>
)

export default IndexPage
