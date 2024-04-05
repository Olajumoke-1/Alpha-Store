import React from "react";
import Offer1 from '../images/Offer1-img.png'
import Offer2 from '../images/Offer2-img.png'

const OfferSection = () => {
  return (
    <div className="flex justify-between p-10 ml-4">

      {/* FIRST CARD  */}
      <div className="w-1/2 mx-2 bg-offercolor1 flex shadow-md" >
        <div className=" pl-8 p-6">
        <button className="bg-orange-300 hover:bg-basegreen text-white font-bold py-1 px-1 rounded mb-1 text-sm mt-4">
            Free Delivery
          </button>
          <p className="text-2xl font-semibold mt-4">Free delivery over ₦15000</p>
          <p className="text-l mt-3 text-gray-600">Shop ₦15000 product and get <br/> free delivery anywhere</p>
          <div className="flex flex-row">
          <button className="bg-basegreen hover:bg-orange-300 text-white font-semibold py-3 px-3 rounded-sm mt-10 flex gap-3">
            Shop Now
            <svg width="19" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 9C3.5 8.58579 3.83579 8.25 4.25 8.25H14.75C15.1642 8.25 15.5 8.58579 15.5 9C15.5 9.41421 15.1642 9.75 14.75 9.75H4.25C3.83579 9.75 3.5 9.41421 3.5 9Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96967 3.21967C9.26256 2.92678 9.73744 2.92678 10.0303 3.21967L15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L10.0303 14.7803C9.73744 15.0732 9.26256 15.0732 8.96967 14.7803C8.67678 14.4874 8.67678 14.0126 8.96967 13.7197L13.6893 9L8.96967 4.28033C8.67678 3.98744 8.67678 3.51256 8.96967 3.21967Z" fill="white"/>
            </svg>
          </button>
          </div>
        </div>
        <img src={Offer1} className="h-45 w-50 pl-6 pt-3" alt="Offer Image 1" />
      </div>

      {/* SECOND CARD */}
      <div className="w-1/2 mx-2 bg-offercolor2 shadow-md flex">
        <div className=" pl-8 p-6 pt-5">
        <button className="bg-basegreen hover:bg-orange-300 w-30 text-white font-semibold py-1 px-6 rounded mb-1 text-sm mt-4">
            60% off
          </button>
          <p className="text-2xl font-semibold mt-4">Organic Food</p>
          <p className="text-l mt-3 text-gray-600">Save up to 60% off your<br /> first order</p>
          <div className="flex flex-row">
          <button className="bg-orange-300 hover:bg-basegreen text-white font-bold py-3 px-3 rounded-sm  mt-9 flex gap-3">
            Order Now
            <svg width="19" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 9C3.5 8.58579 3.83579 8.25 4.25 8.25H14.75C15.1642 8.25 15.5 8.58579 15.5 9C15.5 9.41421 15.1642 9.75 14.75 9.75H4.25C3.83579 9.75 3.5 9.41421 3.5 9Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96967 3.21967C9.26256 2.92678 9.73744 2.92678 10.0303 3.21967L15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L10.0303 14.7803C9.73744 15.0732 9.26256 15.0732 8.96967 14.7803C8.67678 14.4874 8.67678 14.0126 8.96967 13.7197L13.6893 9L8.96967 4.28033C8.67678 3.98744 8.67678 3.51256 8.96967 3.21967Z" fill="white"/>
            </svg>
          </button>
          
          </div>
           </div>
           <img src={Offer2} className=" pl-6 pt-3" alt="Offer Image 1" />
      </div>
    </div>
  );
};

export default OfferSection;

