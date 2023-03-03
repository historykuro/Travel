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
      {/* <div className="absolute  top-1/2 right-0 ">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </form>
      </div> */}
    </section>
  );
};

export default About;
