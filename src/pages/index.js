import React from 'react'
import Link from 'gatsby-link'
import Mentorship from '../components/mentorship'
import Position from '../components/position'

import education from '../data/education'
import positions from '../data/experience'
import { future, previous } from '../data/mentorship'

import './index.scss'

const IndexPage = ({ data }) => (
  <div className="IndexPage">
    <section className="IndexPage__work">
      <h2>Experience</h2>
      <ul className="IndexPage__list">
        {positions.map((position, idx) => (
          <li className="IndexPage__list-item" key={idx}>
            <Position {...position} />
          </li>
        ))}
      </ul>
    </section>
    <section className="IndexPage__mentorship">
      <h2>Mentorship</h2>
      <div>
        <h3>Future</h3>
        <ul className="IndexPage__list">
          {future.map((mentorship, idx) => (
            <li className="IndexPage__list-item" key={idx}>
              <Mentorship {...mentorship} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Past</h3>
        <ul className="IndexPage__list">
          {previous.map((mentorship, idx) => (
            <li className="IndexPage__list-item" key={idx}>
              <Mentorship {...mentorship} />
            </li>
          ))}
        </ul>
      </div>
    </section>
    <section className="IndexPage__education">
      <h2>Education</h2>
      <div>
        <div>{education.degree}</div>
        <div>{education.school}</div>
      </div>
    </section>
  </div>
)

export default IndexPage
