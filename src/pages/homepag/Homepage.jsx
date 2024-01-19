import React from 'react'
import "./home.css"
import Navbar from '../../components/Navbar'
import Intro from '../../components/Intro'
import Skills from '../../components/Skills'
import Me from '../../components/Me'
import Projects from "../../components/projects"
import ConnetWithMe from '../../components/ConnetWithMe'

const Homepage = () => {
  return (
    <div className='Homepage'>
      <Navbar/>
      <Me/>
      <Skills />
      <Projects />
      <Intro />
      <ConnetWithMe />
    </div>
  )
}

export default Homepage
