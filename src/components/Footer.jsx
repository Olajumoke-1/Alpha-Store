import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#EFECEC] w-full px-10 py-6 lgss:py-10 lgss:px-16 ">
      <div className="flex justify-center flex-col lgss:flex-row items-start w-full">

      <div className="w-full lgss:w-1/2 lgss:pt-10">
        <h4 className="text-[20px] lgss:text-[28px] font-semibold text-[#1A202C]">Logo</h4>
        <h4 className="text-[12px] lgss:text-[14px] font-medium text-[#1A202C] mt-4">
          Our vision is to provide convenience
          <br />
          and help increase your sales business.
        </h4>
        <div className="flex justify-start gap-4 items-center mt-4">
          <div className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center">
            <FaFacebookF className="text-[16px]" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center">
            <FaTwitter className="text-[16px]" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center">
            <FaInstagram className="text-[16px]" />
          </div>
        </div>
      </div>
      <div className="w-full py-8 gap-4 lgss:w-1/2 lgss:py-10 grid grid-cols-2 md:grid-cols-3 lgss:gap-16">
        <div>
          <h4 className="text-[18px] lgss:text-[24px] font-semibold text-[#1A202C]">About</h4>
          <div className="mt-4 flex flex-col gap-3">
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">How it works</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Featured</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Partnership</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Business Relation</a>
          </div>
        </div>
        <div>
          <h4 className="text-[18px] lgss:text-[24px] font-semibold text-[#1A202C]">Community</h4>
          <div className="mt-4 flex flex-col gap-3">
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Event</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Blog</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Podcast</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Invite a friend</a>
          </div>
        </div>
        <div>
          <h4 className="text-[18px] lgss:text-[24px] font-semibold text-[#1A202C]">Socials</h4>
          <div className="mt-4 flex flex-col gap-3">
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Discord</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Instagram</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Twitter</a>
          <a href="#" className="text-[13px] lgss:text-[15px] hover:underline hover:text-blue-gray-800 font-medium hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Facebook</a>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full h-[1px] rounded-full bg-[#48628429] my-6"/>
      <div className="w-full flex lgss:justify-between gap-6 lgss:gap-0 flex-col lgss:flex-row items-start lgss:items-center">
        <h4 className="text-[12px] lgss:text-[14px] font-semibold text-[#1A202C]">©2024 Alpha Store. All rights reserved</h4>
        <div className="flex items-center gap-12">
        <a href="#" className="text-[12px] lgss:text-[14px] hover:underline hover:text-blue-gray-800 font-semibold hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Privacy policy</a>
        <a href="#" className="text-[12px] lgss:text-[14px] hover:underline hover:text-blue-gray-800 font-semibold hover:font-bold  hover:transform hover:transition-all text-[#1A202C]">Terms and condition</a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
