import React from 'react'
import NavBar from './NavBar'
import PharmNav from './PharmNav'
import pharmImage from '../images/pharm.jpg'
import AcetoTab from '../images/AcetoTab.png'
import cart from '../images/cart.png'
import ProbKids from '../images/ProbKids.png'
import AzoTab from '../images/AzoTab.png'
import CoughSyrp from '../images/CoughSyrp.png'
import DaburTul from '../images/DaburTul.png'
import NatureMade from '../images/NatureMade.png'
import NutriBio from '../images/NutriBio.png'
import OrgCholrella from '../images/OrgCholrella.png'
import Paracet from '../images/Paracet.png'
import ProbWomen from '../images/ProbWomen.png'
import Acycor from '../images/Acycor.png'
import Amatem from '../images/Amatem.png'
import AntiDiabetic from '../images/AntiDiabetic.png'
import FertilAid from '../images/FertilAid.png'
import Pregnacare from '../images/Pregnacare.png'
import Footer from './Footer'


const Pharmacy = () => {
  return (
    <div>
      < NavBar/>
      <div>
      <img src={pharmImage} alt="pharm picture" className="w-[2040px] h-[123px]" />
    </div>
  
       <div className="mt-[40px]">
        <PharmNav />
      </div>
      {/* First Row */}

    <div className="mx-auto w-[100%] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-0">
      <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0 mb-[80px] mt-[-20px]">
          <div className="bg-white p-4">
      <img src={AcetoTab} alt="AcetoTab picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Acetaminophen 500mg</p>
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦100</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦300</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>
  {/* Add cart section */}
   
   <div className=" bg-white p-4 inline-block">
   <img src={ProbKids} alt="ProbKids picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Chewable Probiotic (kids)</p>
  
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦200</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦700</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
   <img src={OrgCholrella} alt="OrgCholrella picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Organic Chlorella</p>
  
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦700</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦5000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
       <img src={CoughSyrp} alt="CoughSyrp picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Herbion Cough Syrup</p>
  
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦200</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦700</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
      <img src={ProbWomen} alt="ProbWomen picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Probiotics (Women)</p>
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦300</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦5500</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
   </div>
   </div>
   </div>
      {/* First Row */}


      {/* Second Row */}

<div className="mx-auto w-[100%] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-0 mt-[-210px]">
      <div className="grid grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0">
          <div className="bg-white p-4 ">
      <img src={NatureMade} alt="NatureMade picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Zinc tablet 30mg</p>
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦200</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦1000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>
  {/* Add cart section */}
   
   <div className=" bg-white p-4 inline-block">
   <img src={Paracet} alt="Paracetamol picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Paracetamol capsule </p>
  
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦100</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦350</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
   <img src={AzoTab} alt="AzoTab picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">AZO Urinary pain relief</p>
  
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦700</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦5000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
       <img src={NutriBio} alt="NutriBio picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">GrapeFruit Seed extract 125mg</p>
  
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦300</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦3000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 mt-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
      <img src={DaburTul} alt="DaburTul picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Tulsi Respiratory health</p>
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦270</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦900</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
    </div>
    </div>
    </div>
   
        {/* Second Row */}

                    {/* Third row */}

    <div className="mx-auto w-[100%] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-0 mt-[-148px]">
      <div className="grid grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0">
          <div className="bg-white p-4 ">
      <img src={Amatem} alt="Amatem picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-4" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Amatem Forte</p>
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦100</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦930</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>
  {/* Add cart section */}
   
   <div className=" bg-white p-4 inline-block">
   <img src={Acycor} alt="Acycor picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-4" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Acycor Plus Tab</p>
  
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦200</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦700</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
   <img src={AntiDiabetic} alt="Antidiabetic picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Antidiabetic Tea</p>
  
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦900</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦4000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
       <img src={FertilAid} alt="FertilAid picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-4" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">FertilAid For Men</p>
  
        <div className="inline-flex items-center">
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦200</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦7000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
      <img src={Pregnacare} alt="Pregnacare picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-6" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Pregnacare max</p>
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦900</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦7500</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
    </div>
    </div>
    </div>

    <>
  <Footer />
  </>
    </div>

    
  )
}
export default Pharmacy