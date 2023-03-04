import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isOpenShowMenu = (e) => {
    setOpenMenu(!isOpenMenu);
  };

  const onOpen = (e) => {
    setOpen(!isOpen);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const scrolled =
    "bg-white transition-all shadow-scroll border-b border-b-[solid]";
  const container =
    "   border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 fixed z-50 w-full";

  return (
    <div>
      {user && (
        <nav className={`${container} ${isScrolled && scrolled} `}>
          <div className="container  flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
              <span className="self-center  whitespace-nowrap dark:text-white text-[32px] font-bold text-[#ee9d00]">
                Travel
              </span>
            </Link>
            <div className="flex items-center md:order-2">
              <button
                type="button"
                // onClick={onOpen}
                className="group  flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                // data-dropdown-toggle="user-dropdown"
                // data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    user?.img ||
                    "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  }
                  alt="user photo"
                />
                <div
                  className="z-50 absolute hidden group-focus:block   right-4 top-12  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown">
                  <div className=" px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user.username}
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to="/create"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Create Post
                      </Link>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <button onClick={handleLogout}>Sign out</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </button>

              <button
                // data-collapse-toggle="mobile-menu-2"
                onClick={isOpenShowMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="items-center justify-between  w-full    lg:w-auto max-md:hidden md:order-1">
              <ul className="flex flex-col p-4 mt-4 border  border-gray-100 sm:bg-white lg:bg-transparent rounded-lg  bg-transparent  md:flex-row md:space-x-8  md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#suggested"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Suggested
                  </a>
                </li>
              </ul>
            </div>
            {isOpenMenu && (
              <div
                className="items-center justify-between  w-full md:flex  md:w-auto md:order-1"
                id="mobile-menu-2">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 sm:bg-white lg:bg-transparent rounded-lg  bg-transparent  md:flex-row md:space-x-8  md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#suggested"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bg-main text-[18px] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Suggested
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
