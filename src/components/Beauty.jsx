import React from 'react'
import NavBar from './NavBar'
import pharmImage from '../images/pharm.jpg'
import Body from '../images/Body.jpg'
import cart from '../images/cart.png'
import BodyOils from '../images/BodyOils.jpg'
import Brushes from '../images/Brushes.jpg'
import Coconut from '../images/Coconut.jpg'
import Colors from '../images/Colors.jpg'
import Facials from '../images/Facials.jpg'
import Kits from '../images/Kits.jpg'
import Makeup from '../images/Makeup.jpg'
import MenSkin from '../images/MenSkin.jpg'
import Oils from '../images/Oils.jpg'
import Olay from '../images/Olay.jpg'
import Perfs from '../images/Perfs.jpg'
import Perfss from '../images/Perfss.jpg'
import Serums from '../images/Serums.jpg'
import Sunscreen from '../images/Sunscreen.jpg'
import Footer from './Footer'


const Beauty = () => {
  return (
    <div>
      < NavBar/>
      <div>
      <img src={pharmImage} alt="pharm picture" className="w-[2040px] h-[123px]" />
      </div>
  
       <div className="flex space-x-2 mt-[50px] justify-center text-basegreen text-[37px] leading-6 font-bold mr-[27px]">
        <p>Beauty & Skincare</p>
       </div>
      {/* First Row */}

    <div className="mx-auto w-[100%] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-0">
      <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0">
          <div className="bg-white p-4 ">
      <img src={Body} alt="BodySet picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Body Cream Set</p>
        <div className="inline-flex items-center"> 
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦100</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦500</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-2 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>
  {/* Add cart section */}
   
   <div className=" bg-white p-4 inline-block">
   <img src={BodyOils} alt="BodyOilspicture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Body Oils</p>
  
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
   <img src={Serums} alt="Serums picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Facial Serums</p>
  
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
       <img src={Sunscreen} alt="Sunscreen picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Face Sunscreen</p>
  
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
      <img src={Olay} alt="Olay picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Olay Products(set)</p>
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

<div className="mx-auto w-[100%] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-0 mt-[-134px]">
      <div className="grid grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0">
          <div className="bg-white p-4 ">
      <img src={Perfs} alt="NatureMade picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">OAB Perfume (Men)</p>
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦200</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦1000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>
  {/* Add cart section */}
   
   <div className=" bg-white p-4 inline-block">
   <img src={Perfss} alt="Perfss picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">QAR Perfume (Women) </p>
  
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
   <img src={Kits} alt="Kits picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Make-up Kit(set)</p>
  
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
       <img src={MenSkin} alt="MenSkin picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">MenSkin Care (set)</p>
  
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
      <img src={Facials} alt="Facials picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Facials Wash</p>
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

    <div className="mx-auto w-[100%] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-0 mt-[-134px]">
      <div className="grid grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0">
          <div className="bg-white p-4 ">
      <img src={Makeup} alt="Makeup picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-4" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Mini- Makeups</p>
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
   <img src={Brushes} alt="Brushes picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-4" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Makeup Brushes (set)</p>
  
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
   <img src={Colors} alt="Colors picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Eyeshadows</p>
  
        <div className="inline-flex items-center"> {/* Use inline-flex for layout and align items center */}
    <p className="text-gray text-[17px] font-medium line-through inline leading-[21px] w-[37px] h-[20px]">₦900</p>
    <span className="text-basegreen font-[600] ml-4 leading-[25px] w-[48px] h-[24px] text-[20px]">₦2000</span>

   {/* Add cart section */}
    <div className="bg-carrotgreen ml-5 flex items-center px-[2px] py-[2px] w-[72px] h-[35px] rounded cursor-pointer">
        <img src={cart} alt="cart Image" className="bg-white w-[15px] h-[15px] m-2"/> 
        <p className="text-basegreen font-medium text-[17px] leading-[21px] w-[31px] h-[20px] ml-[-6px] cursor-pointer">Add</p>
    </div>
    </div>
      </div>

   <div className=" bg-white p-4 inline-block">
       <img src={Coconut} alt="Coconut picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-4" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Coconut oils</p>
  
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
      <img src={Oils} alt="Oils picture" className="w-[333px] h-[187px] mb-[9px] border-[2px] border-dotAsh p-6" />
        <p className="mb-[13px] font-[600] text-[19px] leading-[23px] text-fontgreen w-[215px] h-[27px]">Nature Essence oils</p>
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
export default Beauty