import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return(
    <>
      <div className="header">
        <div className="upper-header">
          <h1 id="titleText">Hi, I'm Kelsey.</h1>
          <h3 id="subTitle">Full-Stack Software Engineer</h3>
          <section id="menu">
            <button id="about-button">ABOUT</button>
            <button id="projects-button">PROJECTS</button>
            <button id="experience-button">EXPERIENCE</button>
            <button id="contact-button">CONTACT</button>
          </section>
        </div>
        <section id="down-arrow">
          <FontAwesomeIcon id="arrow" icon={faAngleDoubleDown} size="3x" />
        </section>
      </div>
    </>
  )
}