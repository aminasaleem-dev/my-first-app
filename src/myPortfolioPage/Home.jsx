import React from 'react'
import Navbar from '../myPortfolioComponent/NavbarMy'
import Footer from '../myPortfolioComponent/Footer'

const Home = () => {
  return (
   <>
   
   <div className="w-full h-[500px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 flex items-center justify-center px-4">
  <div className="w-auto h-44 text-white font-bold text-center flex flex-col justify-center">
    <h1 className="text-2xl sm:text-3xl md:text-5xl mb-4 drop-shadow-lg">
      Hi, I'm Amina
    </h1>
    <h1 className="text-lg sm:text-xl md:text-2xl tracking-wide">
      Front-End Developer | React.js
    </h1>
  </div>
</div> 

   
   </>
  )
}

export default Home