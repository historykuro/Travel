import React from "react";
import img1 from "../assets/img/img1.jpg";
import { useState } from "react";
import { GiPalmTree } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";

const About = () => {
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {};

  return (
    <section className="h-[calc(100vh-65px)] w-full " id="about">
      <div className="wrapper h-full w-full relative">
        <div className="imgWrapper absolute  h-[90%] ">
          <img src={img1} alt="" className="object-cover " />
        </div>
        <div className="titles absolute top-[20%] left-[10%]">
          <div className="subtitle text-[#efefef] font-[500] text-[38px] ">
            Your dream vacations awaits you
          </div>
          <div className="title font-bold text-[70px] text-[#efefef]">
            book now for{" "}
            <span className="text-[rgb(201,136,15)]">20% off!</span>
          </div>
        </div>
        <div className="inputsContainer absolute top-[47%] left-[8%] flex items-center gap-[36px] px-[4rem] py-[1.25rem] bg-[#fff] rounded-[60px] pr-[2.5rem] ">
          <div className="inputContainer flex flex-col gap-[24px] ">
            <span className="text-[#333] text-[22px] text-left flex items-center gap-[12px] ml-[6px]">
              Type <GiPalmTree className="icon text-bg-main text-[26px]" />
            </span>
            <select
              onChange={(e) => setType(e.target.value)}
              className="pr-[0.6rem] py-[0.2rem] bg-[#f7f7f7] text-[rgb(201,136,15)] font-bold border-none border-[1px] border-[solid] border-[orange]">
              <option disabled>Select Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div className="inputContainer flex flex-col gap-[24px] ">
            <span className="text-[#333] text-[22px] text-left flex items-center gap-[12px] ml-[6px]">
              First day <BiHappy className="icon text-bg-main text-[26px]" />
            </span>
            <input
              type="text"
              placeholder="Type date..."
              onChange={(e) => setStartDate(e.target.value)}
              className="border-b border-b-[solid] border-b-[#777] transition-all"
            />
          </div>
          <div className="inputContainer flex flex-col gap-[24px] ">
            <span className="text-[#333] text-[22px] text-left flex items-center gap-[12px] ml-[6px]">
              Last day{" "}
              <FaUmbrellaBeach className="icon text-bg-main text-[26px]" />
            </span>
            <input
              type="text"
              placeholder="Type date..."
              onChange={(e) => setEndDate(e.target.value)}
              className="placeholder:pl-[0.25rem] transition-all"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bookBtn hover:bg-[#fff] hover:text-bg-main hover:border-bg-main border  border-solid border-transparent px-[16px] py-[9px] bg-bg-main text-[#fff] rounded-[30px] text-[22px] ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
