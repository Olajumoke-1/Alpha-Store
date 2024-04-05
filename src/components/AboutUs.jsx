import React from 'react'
import AboutUsImg from "../images/Aboutus.png"

const AboutUs = () => {
  return (
    <div className="justify-center p-10 ml-3">
    <h2 className="text-2xl font-bold pl-6 text-black mb-2">About Us</h2>
     
     <img src={AboutUsImg} alt="About Us" className="w-full h-61  rounded p-6 " />
      
    </div>
  )
}

export default AboutUs
