import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../myPortfolioComponent/NavbarMy'
import Footer from '../myPortfolioComponent/Footer'


import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'

const Router = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
      </Routes>

      <Footer />
    </>
  )
}

export default Router
