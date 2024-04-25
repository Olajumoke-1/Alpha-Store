import NavBar from './NavBar'
import React, { useState } from 'react';
import Footer from './Footer'


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    
    <div>
      <NavBar />
      

      <div className="flex min-h-[50%] flex-1 flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[690px]">
      <div className="bg-Ash px-6 py-12 shadow sm:rounded-lg sm:px-12 w-[723px] h-[450px] mt-2">
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Account
        </h2>
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className="block rounded-md border-[1px] py-[14px] px-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[400px] h-[40px] ml-15 mt-[-10px]"
                />
              </div>
            </div>
            <div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="block rounded-md border-[1px] py-[14px] px-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[400px] h-[40px] ml-15 mt-[-10px]"
                />
                {<span
    className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 focus:outline-none"
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
  </span>}
              </div>
            </div>
            <div>
              <div className="mt-2 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Confirm Password"
                  required
                  className="block rounded-md border-[1px] py-[14px] px-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[400px] h-[40px] ml-15 mt-[-10px]"
                />
                {  <span
    className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 focus:outline-none"
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
  </span>}
              </div>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] bg-white appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-
                [box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-black checked:focus:after:bg-blue dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="checkboxDefault"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-500"
                htmlFor="checkboxDefault"
              >
                Accept all terms and conditions
              </label>
            </div>
            <div>
              <button
                type="Create account"
                className="flex w-full justify-center rounded-full bg-basegreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Create account
              </button>

              
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
            Already have account?{' '}
            <a href="/signin" className="font-semibold leading-6 text-black hover:text-black">
              Login
            </a>
          </p>
          </form>
          
        </div>
        </div>
      </div>
    </div>

      <>
      <Footer/>
      </>
      </div>
  )
};
    
export default SignUp
