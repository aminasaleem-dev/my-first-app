import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-green-200 flex justify-between items-center font-bold px-4 sm:px-8 shadow-md">
      <h1 className="text-lg sm:text-xl md:text-2xl text-green-900">Portfolio</h1>

      <ul className="flex gap-4 sm:gap-6 md:gap-8 text-green-900 text-sm sm:text-base">
        <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-green-600 transition">About</Link></li>
        <li><Link to="/skills" className="hover:text-green-600 transition">Skills</Link></li>
        <li><Link to="/projects" className="hover:text-green-600 transition">Projects</Link></li>
        <li><Link to="/experience" className="hover:text-green-600 transition">Projects</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
