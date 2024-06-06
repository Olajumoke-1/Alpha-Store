import React from 'react'
import { group1 } from '../images'

const AboutUs = () => {
  return (
    <div className=" w-full px-10 py-6 lgss:py-10 lgss:px-16">
    <h2 className="text-2xl font-bold  text-black ">About Us</h2>
     <div className='bg-[#3BB77EB2] w-full gap-6 lgss:gap-10 flex justify-center items-center flex-col-reverse lgss:flex-row rounded-xl px-8 py-20 lgss:px-16 mt-6 mb-8'>
        <div className='w-full lgss:w-1/2'>
          <img src={group1} alt="" />
        </div>
        <div className='w-full lgss:w-1/2'>
          <h4 className='text-[16px] lgss:text-[20px] text-[#253D4E] font-semibold text-center'>Welcome to Alpha Store, your ultimate destination for all things grocery!From fresh produce to pantry staples, we've got you covered. We have a dedicated pharmacy section with a virtual doctor to provide convenient healthcare services.
</h4>
        </div>
     </div>
    </div>
  )
}

export default AboutUs
