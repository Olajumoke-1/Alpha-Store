
import NavBar from './NavBar'
import React, { useState } from 'react'
import Footer from './Footer'

const SignIn = () =>{
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }
  
  return (
    
      <div>
        <NavBar />
        

{/* SignIn section  */}

      <div className="flex min-h-[50%] flex-1 flex-col justify-center py-6 sm:px-6 lg:px-8">

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[690px]"> 
      <div className="bg-Ash px-6 py-12 shadow sm:rounded-lg sm:px-12 w-[723px] h-[371px] mt-2">
        <form className="space-y-6" action="#" method="POST">
          <div>
         <h2 className="mt-[-20px] text-center text-3xl font-bold leading-9 tracking-tight text-black w-[109px] h-[38px] ml-[230px]">
           Sign In
        </h2>
        </div>

  {/* SignIn section  */}

       {/* Input for Email */}
            <div className="mt-2 ">
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Email'
                autoComplete="email"
                required
                className="block rounded-md border-[1px] py-[14px] px-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[472px] h-[49px] ml-20 mt-[-10px]"
              />
            </div>
    {/* Input for Email */}
          
      <div className="mt-2 relative">

   {/* Input for Password */}
           <input
             id="password"
             name="password"
             type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="current-password"
            required
            className="block rounded-md border-[1px] py-[14px] pl-[16px] pr-[40px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[472px] h-[49px] ml-20 mt-1"
            />
  {/* Input for Password */}

  {/* Eye-open SVG */}
  <span
    className="absolute inset-y-0 right-0 flex items-center pr-[92px] cursor-pointer pb-7"
    onClick={togglePasswordVisibility}
  >
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 12.5C11.163 12.5 11.7989 12.2366 12.2678 11.7678C12.7366 11.2989 13 10.663 13 10C13 9.33696 12.7366 8.70107 12.2678 8.23223C11.7989 7.76339 11.163 7.5 10.5 7.5C9.83696 7.5 9.20107 7.76339 8.73223 8.23223C8.26339 8.70107 8 9.33696 8 10C8 10.663 8.26339 11.2989 8.73223 11.7678C9.20107 12.2366 9.83696 12.5 10.5 12.5V12.5Z"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.16602 10.0003C2.16602 10.0003 5.19602 4.16699 10.4993 4.16699C15.8027 4.16699 18.8327 10.0003 18.8327 10.0003C18.8327 10.0003 15.8027 15.8337 10.4993 15.8337C5.19602 15.8337 2.16602 10.0003 2.16602 10.0003Z"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: showPassword ? 'none' : 'block' }}
      />
    </svg>
  </span>

  {/* Eye-open SVG*/}


{/*Remember-me section */}
          <div className="flex items-center mt-3 h-[21px] justify-between">
            <div className="flex items-center ml-[83px]">
              <input
                id="remember-me"
                name="remember-me "
                type="checkbox"
                className=" rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="remember-me" className="ml-1 block text-[14px] leading-[21px] text-Grey font-normal">
                Remember me
              </label>
            </div>

{/*Remember-me section */}


{/* Forgot-Password section */}
            <div className="text-sm leading-6">
              <a href="#" className="font-normal text-[14px] hover:text-indigo-500 mr-[79px] leading-[21px]  text-Grey ">
                Forgot password
              </a>
            </div>
          </div>
        </div>
  {/* Forgot-Password section */}

{/* Button- LogIn section */}
          <div>
            <button
              type="submit"
              className="flex w-[75%] mt-[-9px] justify-center rounded-[43px] bg-basegreen px-[32px] py-[14px] text-sm font-semibold leading-[17px] text-white shadow-sm ml-20"
            >
              Log in
            </button>
          </div>
{/* Button- LogIn section */}


{/* Don't have Account- section */}
          <div className="relative">
            <div className="absolute flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className= " text-gray font-normal leading-[21px] text-[14px]">Don't have account? </span> <span className="font-bold text-black leading-[21px] text-[14px] cursor-pointer ml-2">Sign Up</span>
            </div>
{/* Don't have Account- section */}


          </div>
        </form>
      </div>
    </div>
   </div>
  <>
  <Footer />
  </>
</div>
 )
 }

export default SignIn
