import React from "react";
import About from "./About";
import Navbar from "../components/Navbar";
import Types from "./Types";
import SuggestedPlaces from "./SuggestedPlaces";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import maldive from "../assets/img/maldive.jpg";
import Places from "./Places";

const Home = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div>
      {!token ? (
        <div className="flex items-center justify-center w-screen h-screen">
          Bạn cần
          <Link
            to="/login"
            className="text-bg-main mx-2 text-[18px] font-medium hover:underline">
            Login
          </Link>
          hoặc
          <Link
            to="/register"
            className="text-bg-main mx-2 text-[18px] font-medium  hover:underline ">
            Register
          </Link>
          mới có thể sử dụng đươc dịch vụ.
        </div>
      ) : (
        <>
          <About />
          <Places />
          <SuggestedPlaces />
          {/* <img src={maldive} alt="maldive" className="mt-[9rem]" /> */}

          <Types />
        </>
      )}
    </div>
  );
};

export default Home;
