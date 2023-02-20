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

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const scrolled = "bg-[#fff] shadow-scroll border-b border-b-[solid]";
  const container =
    "h-[65px] w-full fixed top-0 left-0 transition-all  z-50  border-b-bg-main";

  return (
    <div className={`${container} ${isScrolled && scrolled} `}>
      <div className="wrapper pl-4 pr-4 h-full w-11/12 mx-auto my-0 flex justify-between items-center">
        <div className="left flex-1">
          <Link to="/">
            <h2 className="text-[32px] font-bold text-[#ee9d00]">Travel</h2>
          </Link>
        </div>
        <div className="center flex justify-center flex-[2]">
          <ul className="list flex gap-6 ">
            <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
              <a href="#home">Home</a>
            </li>
            <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
              <a href="#about">About</a>
            </li>
            <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
              <a href="#services">Services</a>
            </li>
            <li className="listItem hover:text-[#ee9d06]  text-[#222] text-[22px] transition-all">
              <a href="#suggested">Suggested</a>
            </li>
          </ul>
        </div>
        <div className="right flex-1 flex justify-end gap-6 items-center text-[22px]">
          {!user ? (
            <>
              <Link
                to="/login"
                className="border-[1px] hover:bg-white hover:text-[#ee9d06] hover:border-[#ee9d06] border-[solid] border-[transparent] text-[20px] font-bold rounded-2xl transition-all bg-[#ee9d06] py-[4px] px-[16px] text-white">
                login
              </Link>
              <Link
                to="/register"
                className="hover:text-[#444] transition-all text-black text-[22px]">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/create">Create</Link>
              <p className="username">{user.username}</p>
              <button
                className="logout  border hover:bg-white hover:text-[#ee9d06]  hover:border-[#ee9d06] border-[solid] bg-transparent font-semibold rounded-2xl transition-all bg-[#ee9d06] py-1 px-3 text-white cursor-pointer flex items-center "
                onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
