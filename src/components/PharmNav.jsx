// Pharmacy NavBar
import React from 'react';
import { Link } from 'react-router-dom'; 

const PharmNav = () => {
  return (
    <nav className="flex space-x-8 mt-[40px] justify-center w-[1200px] h-[33px] gap-[60px] ml-8">
      <Link to="/PharmacistChat" className="w-[200px] h-[33px] font-light text-[23px] leading-[34px] text-basegreen"> Pharmacist Chat</Link>
      <Link to="/Beauty" className="w-[200px] h-[33px] font-light text-[23px] leading-[34px] text-basegreen"> Beauty & Skincare</Link>
      <Link to="/AlphaHealth" className="w-[200px] h-[33px] font-light text-[23px] leading-[34px] text-basegreen"> Alpha Health-Bot</Link>
      <Link to="/Guidance" className="w-[260px] h-[33px] font-light text-[23px] leading-[34px] text-basegreen"> Guidance & Counseling</Link>
    </nav>

  );
};

export default PharmNav;