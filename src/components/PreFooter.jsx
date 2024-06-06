import React from 'react'
import { delivery, safe, tag } from '../images'

const PreFooter = () => {
  return (
    <div className='w-full  px-10 py-6 lgss:py-10 lgss:px-16'>
      <div className='w-full grid grid-cols-1 gap-8  lgss:gap-20 mds:grid-cols-2 lgss:grid-cols-3 '>

      <div className='flex gap-4 justify-start items-center'>
        <div>
          <img src={tag} alt="" />
        </div>
        <div>
          <h4 className='text-[14px] lgss:text-[18px] font-semibold text-[#253D4E]'>Best Prices & Deals</h4>
          <h4 className='text-[13px] lgss:text-[16px] mt-1 font-medium text-[#ADADAD]'>Don’t miss our daily amazing deals and prices</h4>
        </div>
      </div>
      <div className='flex gap-4 justify-start items-center'>
        <div>
          <img src={safe} alt="" />
        </div>
        <div>
          <h4 className='text-[14px] lgss:text-[18px] font-semibold text-[#253D4E]'>Refundable </h4>
          <h4 className='text-[13px] lgss:text-[16px]  mt-1 font-medium text-[#ADADAD]'>If your items have damage we agree to refund it</h4>
        </div>
      </div>
      <div className='flex gap-4 justify-start items-center'>
        <div>
          <img src={delivery} alt="" />
        </div>
        <div>
          <h4 className='text-[14px] lgss:text-[18px] font-semibold text-[#253D4E]'>Free delivery</h4>
          <h4 className='text-[13px] lgss:text-[16px]  mt-1 font-medium text-[#ADADAD]'>Do purchase over $50 and get free delivery anywhere</h4>
        </div>
      </div>
      </div>
      <div className='w-full rounded-full h-[2px] my-16 bg-[#0000000D]'/>
    </div>
  )
}

export default PreFooter
