import React from 'react';
import VectorImage from '../images/Vector.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    /* NAVIGATION BAR 1*/
    <div className="sticky top-0 border bg-white z-10 text-fontgreen ">
    <div className="sticky top-0 border bg-white z-10 pl-12 w-500 flex items-center ">
        <div className=" m-5 p-4 flex items-center lg-inline">
          <img src={VectorImage} alt="Vector Logo" className="w-7 h-7" />
          <h1 className="text-3xl  font-medium text-basegreen">Alpha Store</h1>
        </div>

        {/* SEARCH BAR SECTION */}

        <div className=" w-100 h-9 flex items-center border-none rounded-sm bg-gray-100 text-fontgreen">
      <select className="mr-2  bg-gray-100 border-none outline-none">
        <option>All Categories</option>
        <option>Pharmacy</option>

        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        placeholder="Search for items..."
        className="px-4 py-1 bg-gray-100 rounded-r-sm"
      />
      <svg width="51" height="36" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0.5H51.5C53.3856 0.5 54.3284 0.5 54.9142 1.08579C55.5 1.67157 55.5 2.61438 55.5 4.5V38.5C55.5 40.3856 55.5 41.3284 54.9142 41.9142C54.3284 42.5 53.3856 42.5 51.5 42.5H0.5V0.5Z" fill="#3BB77E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 13.5C23.134 13.5 20 16.634 20 20.5C20 24.366 23.134 27.5 27 27.5C30.866 27.5 34 24.366 34 20.5C34 16.634 30.866 13.5 27 13.5ZM18 20.5C18 15.5294 22.0294 11.5 27 11.5C31.9706 11.5 36 15.5294 36 20.5C36 25.4706 31.9706 29.5 27 29.5C22.0294 29.5 18 25.4706 18 20.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9413 25.4413C32.3319 25.0508 32.965 25.0508 33.3555 25.4413L37.7055 29.7913C38.0961 30.1819 38.0961 30.815 37.7055 31.2055C37.315 31.5961 36.6819 31.5961 36.2913 31.2055L31.9413 26.8555C31.5508 26.465 31.5508 25.8319 31.9413 25.4413Z" fill="white"/>
</svg>

    </div>
      
      {/* CART SECTION */}

    <div className="relative ml-12 pl-7 flex ">  
        <svg width="33" height="40" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g clip-path="url(#clip0_232_22550)">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 28.5C7.5 27.3954 8.39543 26.5 9.5 26.5C10.6046 26.5 11.5 27.3954 11.5 28.5C11.5 29.6046 10.6046 30.5 9.5 30.5C8.39543 30.5 7.5 29.6046 7.5 28.5Z" fill="#253D4E"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 28.5C18.5 27.3954 19.3954 26.5 20.5 26.5C21.6046 26.5 22.5 27.3954 22.5 28.5C22.5 29.6046 21.6046 30.5 20.5 30.5C19.3954 30.5 18.5 29.6046 18.5 28.5Z" fill="#253D4E"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8.5C0.5 7.94772 0.947715 7.5 1.5 7.5H5.5C5.97663 7.5 6.38701 7.83639 6.48055 8.30374L7.32043 12.5H23.5C23.798 12.5 24.0805 12.6329 24.2705 12.8626C24.4605 13.0922 24.5381 13.3946 24.4823 13.6873L22.8809 22.0848C22.7437 22.7754 22.368 23.3958 21.8195 23.8373C21.2738 24.2766 20.5916 24.511 19.8914 24.5H10.1886C9.48837 24.511 8.8062 24.2766 8.26048 23.8373C7.71225 23.3959 7.33664 22.7759 7.19933 22.0857C7.19927 22.0854 7.19939 22.0859 7.19933 22.0857L5.52879 13.7392C5.52201 13.7116 5.51638 13.6835 5.51195 13.6551L4.68032 9.5H1.5C0.947715 9.5 0.5 9.05228 0.5 8.5ZM7.72073 14.5L9.16084 21.6952C9.20656 21.9254 9.33179 22.1322 9.51461 22.2793C9.69743 22.4265 9.92619 22.5047 10.1608 22.5002L10.18 22.5H19.9L19.9192 22.5002C20.1538 22.5047 20.3826 22.4265 20.5654 22.2793C20.7474 22.1328 20.8723 21.9273 20.9185 21.6984L22.2913 14.5H7.72073Z" fill="#253D4E"/>
</g>
<circle cx="24" cy="9" r="7.5" fill="#3BB77E" stroke="white" stroke-width="2"/>
<path d="M24.03 12.5C23.898 12.5 23.788 12.456 23.7 12.368C23.612 12.28 23.568 12.1737 23.568 12.049V5.79L23.7 5.944L22.457 6.802C22.3837 6.85333 22.2993 6.879 22.204 6.879C22.0793 6.879 21.973 6.835 21.885 6.747C21.797 6.65167 21.753 6.54533 21.753 6.428C21.753 6.26667 21.83 6.13833 21.984 6.043L23.733 4.888C23.7917 4.85133 23.8503 4.82567 23.909 4.811C23.9677 4.79633 24.0263 4.79267 24.085 4.8C24.217 4.8 24.3197 4.844 24.393 4.932C24.4737 5.01267 24.514 5.11533 24.514 5.24V12.049C24.514 12.1737 24.4663 12.28 24.371 12.368C24.283 12.456 24.1693 12.5 24.03 12.5Z" fill="white"/>
<defs>
<clipPath id="clip0_232_22550">
<rect width="24" height="24" fill="white" transform="translate(0.5 7.5)"/>
</clipPath>
</defs>
        </svg>
        <div className="flex flex-col">
        <span className="text-sm ml-1 font-small">My Cart</span>
        <span className="text-sm pt-0.1 pl-1 text-basegreen">$21</span>
        </div>
        <div className="absolute left-10 top-0 mt-3 ml-10 pl-2">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 6.21967C4.76256 5.92678 5.23744 5.92678 5.53033 6.21967L9.5 10.1893L13.4697 6.21967C13.7626 5.92678 14.2374 5.92678 14.5303 6.21967C14.8232 6.51256 14.8232 6.98744 14.5303 7.28033L10.0303 11.7803C9.73744 12.0732 9.26256 12.0732 8.96967 11.7803L4.46967 7.28033C4.17678 6.98744 4.17678 6.51256 4.46967 6.21967Z" fill="#253D4E"/>
        </svg>

        {/* For example, using Font Awesome: */}
        <i className="fas fa-chevron-down"></i>
    </div>

    {/* CLIENT BOARD */}
    <div className="ml-20 pl-6 flex items-center">
     <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
     <div className="flex">
     <span className="text-md ml-1 font-small">Ramzi David</span>
     <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 6.21967C4.76256 5.92678 5.23744 5.92678 5.53033 6.21967L9.5 10.1893L13.4697 6.21967C13.7626 5.92678 14.2374 5.92678 14.5303 6.21967C14.8232 6.51256 14.8232 6.98744 14.5303 7.28033L10.0303 11.7803C9.73744 12.0732 9.26256 12.0732 8.96967 11.7803L4.46967 7.28033C4.17678 6.98744 4.17678 6.51256 4.46967 6.21967Z" fill="#253D4E"/>
        </svg>

        {/* For example, using Font Awesome: */}
        <i className="fas fa-chevron-down"></i>
     </div>

    </div>

    </div>
    </div>

    <div className="sticky top-0 border bg-white z-10     w-full h-20 flex items-center ">
      <div className=" m-20 bg-basegreen text-white px-2 py-1 rounded-sm flex items-center">
      <div className=" p-2">
       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10V3ZM4 4V9H9V4H4Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3ZM15 4V9H20V4H15Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 13.4477 2.44772 13 3 13H10C10.5523 13 11 13.4477 11 14V21C11 21.5523 10.5523 22 10 22H3C2.44772 22 2 21.5523 2 21V14ZM4 15V20H9V15H4Z" fill="white"/>
       </svg>
     </div>
       <div>
          <p>Browse All Categories</p>
       </div>
        </div>

        <div className="">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 6.21967C4.76256 5.92678 5.23744 5.92678 5.53033 6.21967L9.5 10.1893L13.4697 6.21967C13.7626 5.92678 14.2374 5.92678 14.5303 6.21967C14.8232 6.51256 14.8232 6.98744 14.5303 7.28033L10.0303 11.7803C9.73744 12.0732 9.26256 12.0732 8.96967 11.7803L4.46967 7.28033C4.17678 6.98744 4.17678 6.51256 4.46967 6.21967Z" fill="#253D4E"/>
        </svg>
        </div>

        <div className=" ml-10 pl-6 ">
        <nav className=" flex items-center justify-between">
            <div className="flex space-x-8">
                <Link to="/" className=" text-basegreen flex items-center">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_34_18537)">
<path d="M16.9371 15.3316L12.2496 20.0191C12.1617 20.1071 12.0424 20.1565 11.918 20.1565C11.7936 20.1565 11.6743 20.1071 11.5863 20.0191C11.4984 19.9312 11.449 19.8119 11.449 19.6875C11.449 19.5631 11.4984 19.4438 11.5863 19.3559L15.4734 15.4688H3.48047C3.35615 15.4688 3.23692 15.4194 3.14901 15.3315C3.0611 15.2435 3.01172 15.1243 3.01172 15C3.01172 14.8757 3.0611 14.7565 3.14901 14.6685C3.23692 14.5806 3.35615 14.5312 3.48047 14.5312H15.4734L11.5863 10.6441C11.4984 10.5562 11.449 10.4369 11.449 10.3125C11.449 10.1881 11.4984 10.0688 11.5863 9.98086C11.6743 9.8929 11.7936 9.84349 11.918 9.84349C12.0424 9.84349 12.1617 9.8929 12.2496 9.98086L16.9371 14.6684C16.9807 14.7119 17.0153 14.7636 17.0389 14.8205C17.0624 14.8774 17.0746 14.9384 17.0746 15C17.0746 15.0616 17.0624 15.1226 17.0389 15.1795C17.0153 15.2364 16.9807 15.2881 16.9371 15.3316ZM23.168 4.21875H16.6055C16.4811 4.21875 16.3619 4.26814 16.274 4.35604C16.1861 4.44395 16.1367 4.56318 16.1367 4.6875C16.1367 4.81182 16.1861 4.93105 16.274 5.01896C16.3619 5.10686 16.4811 5.15625 16.6055 5.15625H23.168C23.2923 5.15625 23.4115 5.20564 23.4994 5.29354C23.5873 5.38145 23.6367 5.50068 23.6367 5.625V24.375C23.6367 24.4993 23.5873 24.6185 23.4994 24.7065C23.4115 24.7944 23.2923 24.8438 23.168 24.8438H16.6055C16.4811 24.8438 16.3619 24.8931 16.274 24.981C16.1861 25.069 16.1367 25.1882 16.1367 25.3125C16.1367 25.4368 16.1861 25.556 16.274 25.644C16.3619 25.7319 16.4811 25.7812 16.6055 25.7812H23.168C23.5409 25.7812 23.8986 25.6331 24.1623 25.3694C24.4261 25.1056 24.5742 24.748 24.5742 24.375V5.625C24.5742 5.25204 24.4261 4.89435 24.1623 4.63063C23.8986 4.36691 23.5409 4.21875 23.168 4.21875Z" fill="#F8F8F8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1577 1.01148C10.4586 0.777424 10.8799 0.777424 11.1809 1.01148L18.6809 6.84481C18.8839 7.00269 19.0026 7.24545 19.0026 7.5026V16.6693C19.0026 17.3324 18.7392 17.9682 18.2704 18.437C17.8015 18.9059 17.1657 19.1693 16.5026 19.1693H4.83594C4.1729 19.1693 3.53701 18.9059 3.06817 18.437C2.59933 17.9682 2.33594 17.3324 2.33594 16.6693V7.5026C2.33594 7.24545 2.45466 7.00269 2.65765 6.84481L10.1577 1.01148ZM4.0026 7.91017V16.6693C4.0026 16.8903 4.0904 17.1023 4.24668 17.2585C4.40296 17.4148 4.61492 17.5026 4.83594 17.5026H16.5026C16.7236 17.5026 16.9356 17.4148 17.0919 17.2585C17.2481 17.1023 17.3359 16.8903 17.3359 16.6693V7.91017L10.6693 2.72499L4.0026 7.91017Z" fill="#3BB77E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33594 9.9974C7.33594 9.53715 7.70904 9.16406 8.16927 9.16406H13.1693C13.6295 9.16406 14.0026 9.53715 14.0026 9.9974V18.3307C14.0026 18.791 13.6295 19.1641 13.1693 19.1641C12.709 19.1641 12.3359 18.791 12.3359 18.3307V10.8307H9.0026V18.3307C9.0026 18.791 8.6295 19.1641 8.16927 19.1641C7.70904 19.1641 7.33594 18.791 7.33594 18.3307V9.9974Z" fill="#3BB77E"/>
               </g>
               <defs>
<clipPath id="clip0_34_18537">
<rect width="20" height="20" fill="white" transform="translate(0.667969)"/>
</clipPath>
               </defs>
               </svg>

                    Home
                </Link>
                <Link to="/pharmacy" className="text-fontgreen flex items-center">
                <svg width="17" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66102 18.0022C1.10235 18.0022 0.662348 17.7785 0.341015 17.3312C0.0196818 16.8839 -0.0516513 16.3992 0.127015 15.8772L1.75302 11.0022L0.127015 6.12721C-0.0516513 5.60521 0.0196818 5.12054 0.341015 4.67321C0.662348 4.22588 1.10235 4.00221 1.66102 4.00221H11.8L12.94 0.83121C12.9927 0.689877 13.0897 0.586877 13.231 0.52221C13.373 0.457543 13.5143 0.451544 13.655 0.50421C13.7963 0.556877 13.8997 0.653877 13.965 0.79521C14.029 0.93721 14.0347 1.07854 13.982 1.21921L12.988 4.00221H13.768C14.328 4.00221 14.7683 4.22588 15.089 4.67321C15.4097 5.12054 15.481 5.60521 15.303 6.12721L13.677 11.0022L15.303 15.8772C15.4817 16.3992 15.4103 16.8839 15.089 17.3312C14.7677 17.7785 14.3277 18.0022 13.769 18.0022H1.66102ZM7.21501 14.3102H8.21501V11.5022H11.023V10.5022H8.21501V7.69421H7.21501V10.5022H4.40702V11.5022H7.21501V14.3102ZM1.66102 17.0022H13.769C13.987 17.0022 14.1537 16.9189 14.269 16.7522C14.3843 16.5855 14.41 16.3995 14.346 16.1942L12.615 11.0022L14.345 5.81021C14.4097 5.60488 14.3843 5.41888 14.269 5.25221C14.1537 5.08554 13.987 5.00221 13.769 5.00221H1.66102C1.44302 5.00221 1.27635 5.08554 1.16102 5.25221C1.04568 5.41888 1.02002 5.60488 1.08402 5.81021L2.81501 11.0022L1.08501 16.1942C1.02035 16.3995 1.04568 16.5855 1.16102 16.7522C1.27635 16.9189 1.44302 17.0022 1.66102 17.0022Z" fill="#253D48"/>
               </svg>

                    Pharmacy
                </Link>
                <Link to="/signin" className="text-fontgreen flex items-center">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7302 12.2653L9.98016 16.0153C9.90979 16.0857 9.81436 16.1252 9.71484 16.1252C9.61533 16.1252 9.5199 16.0857 9.44953 16.0153C9.37917 15.9449 9.33963 15.8495 9.33963 15.75C9.33963 15.6505 9.37917 15.5551 9.44953 15.4847L12.5592 12.375H2.96484C2.86539 12.375 2.77 12.3355 2.69968 12.2652C2.62935 12.1948 2.58984 12.0995 2.58984 12C2.58984 11.9005 2.62935 11.8052 2.69968 11.7348C2.77 11.6645 2.86539 11.625 2.96484 11.625H12.5592L9.44953 8.51531C9.37917 8.44495 9.33963 8.34951 9.33963 8.25C9.33963 8.15049 9.37917 8.05505 9.44953 7.98469C9.5199 7.91432 9.61533 7.87479 9.71484 7.87479C9.81436 7.87479 9.90979 7.91432 9.98016 7.98469L13.7302 11.7347C13.765 11.7695 13.7927 11.8109 13.8116 11.8564C13.8304 11.9019 13.8401 11.9507 13.8401 12C13.8401 12.0493 13.8304 12.0981 13.8116 12.1436C13.7927 12.1891 13.765 12.2305 13.7302 12.2653ZM18.7148 3.375H13.4648C13.3654 3.375 13.27 3.41451 13.1997 3.48484C13.1294 3.55516 13.0898 3.65054 13.0898 3.75C13.0898 3.84946 13.1294 3.94484 13.1997 4.01516C13.27 4.08549 13.3654 4.125 13.4648 4.125H18.7148C18.8143 4.125 18.9097 4.16451 18.98 4.23484C19.0503 4.30516 19.0898 4.40054 19.0898 4.5V19.5C19.0898 19.5995 19.0503 19.6948 18.98 19.7652C18.9097 19.8355 18.8143 19.875 18.7148 19.875H13.4648C13.3654 19.875 13.27 19.9145 13.1997 19.9848C13.1294 20.0552 13.0898 20.1505 13.0898 20.25C13.0898 20.3495 13.1294 20.4448 13.1997 20.5152C13.27 20.5855 13.3654 20.625 13.4648 20.625H18.7148C19.0132 20.625 19.2994 20.5065 19.5103 20.2955C19.7213 20.0845 19.8398 19.7984 19.8398 19.5V4.5C19.8398 4.20163 19.7213 3.91548 19.5103 3.7045C19.2994 3.49353 19.0132 3.375 18.7148 3.375Z" fill="#253D48"/>
                </svg>

                    Sign In
                </Link>
                <Link to="/signup" className="text-fontgreen flex items-center">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7302 12.2653L9.98016 16.0153C9.90979 16.0857 9.81436 16.1252 9.71484 16.1252C9.61533 16.1252 9.5199 16.0857 9.44953 16.0153C9.37917 15.9449 9.33963 15.8495 9.33963 15.75C9.33963 15.6505 9.37917 15.5551 9.44953 15.4847L12.5592 12.375H2.96484C2.86539 12.375 2.77 12.3355 2.69968 12.2652C2.62935 12.1948 2.58984 12.0995 2.58984 12C2.58984 11.9005 2.62935 11.8052 2.69968 11.7348C2.77 11.6645 2.86539 11.625 2.96484 11.625H12.5592L9.44953 8.51531C9.37917 8.44495 9.33963 8.34951 9.33963 8.25C9.33963 8.15049 9.37917 8.05505 9.44953 7.98469C9.5199 7.91432 9.61533 7.87479 9.71484 7.87479C9.81436 7.87479 9.90979 7.91432 9.98016 7.98469L13.7302 11.7347C13.765 11.7695 13.7927 11.8109 13.8116 11.8564C13.8304 11.9019 13.8401 11.9507 13.8401 12C13.8401 12.0493 13.8304 12.0981 13.8116 12.1436C13.7927 12.1891 13.765 12.2305 13.7302 12.2653ZM18.7148 3.375H13.4648C13.3654 3.375 13.27 3.41451 13.1997 3.48484C13.1294 3.55516 13.0898 3.65054 13.0898 3.75C13.0898 3.84946 13.1294 3.94484 13.1997 4.01516C13.27 4.08549 13.3654 4.125 13.4648 4.125H18.7148C18.8143 4.125 18.9097 4.16451 18.98 4.23484C19.0503 4.30516 19.0898 4.40054 19.0898 4.5V19.5C19.0898 19.5995 19.0503 19.6948 18.98 19.7652C18.9097 19.8355 18.8143 19.875 18.7148 19.875H13.4648C13.3654 19.875 13.27 19.9145 13.1997 19.9848C13.1294 20.0552 13.0898 20.1505 13.0898 20.25C13.0898 20.3495 13.1294 20.4448 13.1997 20.5152C13.27 20.5855 13.3654 20.625 13.4648 20.625H18.7148C19.0132 20.625 19.2994 20.5065 19.5103 20.2955C19.7213 20.0845 19.8398 19.7984 19.8398 19.5V4.5C19.8398 4.20163 19.7213 3.91548 19.5103 3.7045C19.2994 3.49353 19.0132 3.375 18.7148 3.375Z" fill="#253D48"/>
                </svg>
                    Sign Up
                </Link>
            </div>
        </nav>
        </div>


        <div className="pl-8 m-8 rounded-lg flex items-center space-x-1">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.26534 2.40394L1.32579 2.34076C2.93198 0.734429 3.97794 0.308656 5.09396 0.950414C5.41499 1.13502 5.71595 1.39342 6.12519 1.80907L7.3805 3.11076C8.07386 3.86734 8.23148 4.59305 8.00571 5.44294L7.97461 5.55545L7.94008 5.66733L7.77227 6.15968C7.41309 7.26383 7.56305 7.88679 8.84096 9.16438C10.1699 10.493 10.7902 10.6017 11.9795 10.186L12.1915 10.1124L12.4478 10.0291L12.56 9.998C13.4633 9.75698 14.2264 9.94932 15.0357 10.7581L16.0472 11.7351L16.3449 12.0279C16.675 12.3645 16.8932 12.6312 17.0543 12.9131C17.6921 14.0288 17.2658 15.0741 15.6133 16.7205L15.4561 16.8798C15.2094 17.1176 14.9789 17.2879 14.6402 17.4487C14.0718 17.7186 13.4002 17.8204 12.6199 17.7118C10.697 17.4444 8.25821 15.9272 5.16797 12.8378C4.91642 12.5863 4.67549 12.3397 4.44495 12.0978L3.99764 11.6204C-0.193908 7.06643 -0.563687 4.26896 1.15405 2.51448L1.26534 2.40394ZM5.11342 2.56483C4.84192 2.29717 4.64471 2.13401 4.47084 2.03403C4.08623 1.81286 3.67099 1.90635 2.90248 2.56779L2.66101 2.78352C2.61889 2.82239 2.57581 2.86276 2.53172 2.90463L2.25483 3.17432L2.22988 3.2055L2.04216 3.39409C1.58854 3.85743 1.37366 4.42293 1.55883 5.39545C1.86267 6.99131 3.25342 9.15617 6.05174 11.9538C8.96747 14.8688 11.189 16.2508 12.7921 16.4738C13.7266 16.6037 14.2032 16.3774 14.6894 15.8794L15.0601 15.5053C15.2339 15.3234 15.3824 15.1585 15.5079 15.0079L15.6789 14.7923C16.1162 14.2099 16.1561 13.8606 15.9691 13.5335C15.898 13.409 15.7945 13.2725 15.6438 13.1058L15.4395 12.8899L15.3185 12.7689L14.0425 11.5367C13.616 11.1435 13.3246 11.0877 12.8822 11.2058L12.7545 11.2425L12.2259 11.4219C10.6925 11.9172 9.58624 11.677 7.95719 10.0484C6.26998 8.3616 6.07211 7.23521 6.63742 5.61337L6.67369 5.50915L6.77397 5.20701L6.82327 5.01442C6.91069 4.59528 6.81088 4.30304 6.36032 3.8524C6.34176 3.83385 6.32103 3.81295 6.29847 3.79006L5.11342 2.56483Z" fill="#3BB77E"/>
        </svg>

    <span className="text-green-600 font-semibold">08152770357</span>
    <span className="text-gray-600">24/7 Support Center</span>
</div>


    </div>
      
        
      
    </div>

  )

}

export default NavBar;