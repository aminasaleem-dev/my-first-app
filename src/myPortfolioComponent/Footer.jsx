import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className="w-full h-auto bg-gradient-to-r from-blue-600 to-purple-500 text-white font-bold flex flex-col md:flex-row justify-start items-start p-6 md:p-10 gap-10 md:gap-32">


                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold">Amina.dev</h1>
                    <h1 className="text-sm md:text-base text-gray-200">
                        Front-End Developer | React.js & Tailwind
                    </h1>
                </div>

                 <ul className="w-52  text-sm sm:text-base">
        <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-green-600 transition">About</Link></li>
        <li><Link to="/skills" className="hover:text-green-600 transition">Skills</Link></li>
        <li><Link to="/projects" className="hover:text-green-600 transition">Projects</Link></li>
      </ul>


                <h1 className="text-lg md:text-xl hover:text-yellow-300 transition cursor-pointer">Follow Me</h1>

            </footer>


            <div className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-center py-4 text-gray-200 text-sm border border-t-gray-400">
                ©  Amina 2025 All rights reserved
            </div>
        </>
    )
}

export default Footer
