// HeroSection.jsx
import React from 'react'
import HeroImage from '../images/Hero-img.png'

const HeroSection = () => {
  return (
    
 <div className="relative text-fontgreen">
       <svg width="1262" height="480" viewBox="0 0 1262 480" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M0 0H1440V477H0V0Z" fill="#C5EAD9" fill-opacity="0.78"/>
       </svg>
       <div className="flex">
    <div className="absolute top-20 left-8 p-8 h-[calc(100%-2.5rem)]" style={{ lineHeight: '2' }}>
        <h1 className="text-5xl font-bold mb-3 text-black">Don't miss our daily <br/><span>amazing deals</span></h1>
        <p className="mt-8 text-gray-600 text-lg">
            Save up to 60% off your first order
        </p>
        <div className="flex items-center mt-12 ">
        
        <input
        type="email"
        placeholder="Enter email address"
        className="px-14 border border-gray-300 focus:outline-none focus:border-green-500"
        />
        <button
        className="bg-basegreen text-white px-3 hover:bg-green-600 focus:border-green-700"
         >
        Subscribe
        </button>
    </div>
    
      </div>
      <div className="top-0 right-0 absolute">
      <img src={HeroImage} alt="Vector Logo" className="w-62 h-61" />
      </div>
    </div>
     
      
    
     
    </div>
  )
}

export default HeroSection