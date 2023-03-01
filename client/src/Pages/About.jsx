import React from "react";
import img1 from "../assets/img/img1.jpg";
import { useState } from "react";
import { GiPalmTree } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {};

  return (
    <section className="h-[calc(100vh-65px)] w-full " id="about">
      <div className="wrapper   relative">
        <div className="imgWrapper absolute h-screen w-full">
          <img src={img1} alt="" className="object-cover w-full h-full " />
        </div>
      </div>
      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-5">
          <h2 className="text-2xl font-bold cursor-default">D I S C O V E R</h2>
          <h1 className="text-5xl font-bold cursor-default">W O R L D</h1>
          <p className="mx-10 text-gray-400 cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam
            consequatur, necessitatibus dolorem, provident voluptas esse
            recusandae impedit distinctio laboriosam modi a nulla ratione
            quaerat?
          </p>
        </div>

        <div className="space-x-4">
          <Link to="/list">
            <button className="bg-bg-main py-2 px-5 text-white rounded-md hover:bg-inherit hover:text-bg-main hover:border-bg-main border border-transparent hover:duration-300">
              Road Map
            </button>
          </Link>
          <button className="text-bg-main border border-bg-main rounded-md py-2 px-5 hover:bg-bg-main hover:text-white hover:duration-300">
            Book a Trip
          </button>
        </div>

        <div className="text-white flex space-x-5">
          <AiFillFacebook
            size={"2rem"}
            className="cursor-pointer hover:text-bg-main"
          />
          <AiFillInstagram
            size={"2rem"}
            className="cursor-pointer hover:text-bg-main"
          />
          <AiFillTwitterSquare
            size={"2rem"}
            className="cursor-pointer hover:text-bg-main"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
