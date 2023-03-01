import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  console.log(user);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const scrolled =
    "bg-white transition-all shadow-scroll border-b border-b-[solid]";
  const container =
    "   border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 fixed z-50 w-full";

  // return (
  //   <div className={`${container} ${isScrolled && scrolled} `}>
  //     {/* <div className="wrapper pl-4 pr-4 h-full w-11/12 mx-auto my-0 flex justify-between items-center">
  //       <div className="left flex-1">
  //         <Link to="/">
  //           <h2 className="text-[32px] font-bold text-[#ee9d00]">Travel</h2>
  //         </Link>
  //       </div>
  //       <div className="center flex justify-center flex-[2]">
  //         <ul className="list flex gap-6 ">
  //           <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
  //             <a href="#home">Home</a>
  //           </li>

  //           <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
  //             <a href="#places">Places</a>
  //           </li>
  //           <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
  //             <Link to="/list">ListPlaces</Link>
  //           </li>
  //           <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
  //             <a href="#suggested">Suggested</a>
  //           </li>
  //         </ul>
  //       </div>

  //       <div className="right flex-1 flex justify-end gap-6 items-center text-[22px]">
  //         {!user ? (
  //           <>
  //             <Link
  //               to="/login"
  //               className="border-[1px] hover:bg-white hover:text-[#ee9d06] hover:border-[#ee9d06] border-[solid] border-[transparent] text-[20px] font-bold rounded-2xl transition-all bg-[#ee9d06] py-[4px] px-[16px] text-white">
  //               login
  //             </Link>
  //             <Link
  //               to="/register"
  //               className="hover:text-[#444] transition-all text-black text-[22px]">
  //               Register
  //             </Link>
  //           </>
  //         ) : (
  //           <>
  //             <Link to="/create">Create</Link>
  //             <p className="username">{user.username}</p>
  //             <button
  //               className="logout  border hover:bg-white hover:text-[#ee9d06]  hover:border-[#ee9d06] border-[solid] bg-transparent font-semibold rounded-2xl transition-all bg-[#ee9d06] py-1 px-3 text-white cursor-pointer flex items-center "
  //               onClick={handleLogout}>
  //               Logout
  //             </button>
  //           </>
  //         )}
  //       </div>
  //     </div> */}
  // <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  //   <div class="container flex flex-wrap items-center justify-between mx-auto">
  //     <a href="https://flowbite.com/" class="flex items-center">
  //       <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
  //         Travel
  //       </span>
  //     </a>
  //     <div class=" group is-published flex items-center md:order-2 hover">
  //       <button
  //         type="button"
  //         class="flex  mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
  //         id="user-menu-button"
  //         aria-expanded="false"
  //         data-dropdown-toggle="user-dropdown"
  //         data-dropdown-placement="bottom">
  //         <span class="sr-only">Open user menu</span>
  //         <img
  //           class="w-8 h-8 rounded-full"
  //           src="/docs/images/people/profile-picture-3.jpg"
  //           alt="user photo"
  //         />
  //       </button>
  //       <div
  //         className="z-50 hidden  active:block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
  //         id="user-dropdown">
  //         <div class="px-4 py-3">
  //           <span class="block text-sm text-gray-900 dark:text-white">
  //             Bonnie Green
  //           </span>
  //           <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
  //             name@flowbite.com
  //           </span>
  //         </div>
  //         <ul class="py-2" aria-labelledby="user-menu-button">
  //           <li>
  //             <a
  //               href="#"
  //               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //               Dashboard
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               href="#"
  //               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //               Settings
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               href="#"
  //               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //               Earnings
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               href="#"
  //               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //               Sign out
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <button
  //         data-collapse-toggle="mobile-menu-2"
  //         type="button"
  //         class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //         aria-controls="mobile-menu-2"
  //         aria-expanded="false">
  //         <span class="sr-only">Open main menu</span>
  //         <svg
  //           class="w-6 h-6"
  //           aria-hidden="true"
  //           fill="currentColor"
  //           viewBox="0 0 20 20"
  //           xmlns="http://www.w3.org/2000/svg">
  //           <path
  //             fill-rule="evenodd"
  //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
  //             clip-rule="evenodd"></path>
  //         </svg>
  //       </button>
  //     </div>
  //     {/* <div
  //       class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
  //       id="mobile-menu-2">
  //       <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //         <li>
  //           <a
  //             href="#"
  //             class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
  //             aria-current="page">
  //             Home
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="#"
  //             class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //             About
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="#"
  //             class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //             Services
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="#"
  //             class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //             Pricing
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="#"
  //             class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //             Contact
  //           </a>
  //         </li>
  //       </ul>
  //     </div> */}
  //   </div>
  // </nav>
  // </div>
  // );
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      {user && (
        <nav className={`${container} ${isScrolled && scrolled} `}>
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" class="flex items-center">
              <span class="self-center  whitespace-nowrap dark:text-white text-[32px] font-bold text-[#ee9d00]">
                Travel
              </span>
            </Link>
            <div class="flex items-center md:order-2">
              <button
                type="button"
                class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
              </button>
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown">
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    {user.username}
                  </span>
                  <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    {user.email}
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/create"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Create Post
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      <button onClick={handleLogout}>Sign out</button>
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex  md:w-auto md:order-1"
              id="mobile-menu-2">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100 sm:bg-white lg:bg-transparent rounded-lg  bg-transparent  md:flex-row md:space-x-8  md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#suggested"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Suggested
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
