import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import NavBar from './NavBar';
import Footer from './Footer';
import LoadingBar from './LoadingBar'; // Import LoadingBar

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showLoadingBar, setShowLoadingBar] = useState(false); // State for showing loading bar
    const [loadingBarMessage, setLoadingBarMessage] = useState(''); // State for loading bar message

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Sign Up button clicked');
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log('Account created:', user);
                setLoadingBarMessage('Sign Up successful!'); // Set loading bar message
                setShowLoadingBar(true); // Show loading bar
                setTimeout(() => setShowLoadingBar(false), 3000); // Hide loading bar after 3 seconds
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error creating account:', errorCode, errorMessage);
            });
    };


    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex min-h-[50%] flex-1 flex-col justify-center py-6 sm:px-6 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[690px]">
                    <div className="bg-Ash px-6 py-12 shadow sm:rounded-lg sm:px-12 w-[723px] h-[371px] mt-2">
                        <form class
="space-y-6" onSubmit={handleSignUp}>
<div>
    <h2 className="mt-[-35px] text-center text-3xl font-bold leading-9 tracking-tight text-black w-[109px] h-[38px] ml-[230px]">Sign Up</h2>
</div>
<div className="mt-2">
    <input
        id="email"
        name="email"
        type="email"
        placeholder='Email'
        autoComplete="email"
        required
        className="block rounded-md border-[1px] py-[14px] px-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[472px] h-[49px] ml-20 mt-[-10px]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
</div>
<div className="mt-2 relative">
    <input
        id="password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        autoComplete="new-password"
        required
        className="block rounded-md border-[1px] py-[14px] pl-[16px] pr-[40px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[472px] h-[49px] ml-20 mt-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
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
</div>
<div className="mt-2 relative">
    <input
        id="confirmPassword"
        name="confirmPassword"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Confirm Password"
        autoComplete="new-password"
        required
        className="block rounded-md border-[1px] py-[14px] pl-[16px] pr-[40px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[472px] h-[49px] ml-20 mt-1"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <span
        className="absolute inset-y-0 right-0 flex items-center pr-[92px] cursor-pointer pb-7"
        onClick={toggleConfirmPasswordVisibility}
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
                style={{ display: showConfirmPassword ? 'none' : 'block' }}
            />
        </svg>
    </span>
</div>
<div>
    <button
        type="submit"
        className="flex w-[75%] mt-[-9px] justify-center rounded-[43px] bg-basegreen px-[32px] py-[14px] text-sm font-semibold leading-[17px] text-white shadow-sm ml-20"
    >
        Sign Up
    </button>
</div>
<div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200" />
    </div>
  <div className="relative flex justify-center">
        <span className="text-Grey font-normal leading-[21px] text-[14px]">Already have an account? </span>
        <Link to="/signin" className="font-bold text-black leading-[21px] text-[14px] cursor-pointer">Sign In</Link>
    </div>
</div>
</form>
</div>
</div>
</div>
{showLoadingBar && <LoadingBar message={loadingBarMessage} />} {/* Render loading bar */}
<Footer />
</>
);
};

export default SignUp;
