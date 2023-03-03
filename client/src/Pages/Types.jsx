import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/img/img2.jpg";
import bungalow from "../assets/img/bungalow.jpg";
import penthouse from "../assets/img/penthouse.jpg";
import villa from "../assets/img/villa.jpg";
import apartment from "../assets/img/apartment.jpg";

import { useSelector } from "react-redux";

const Types = () => {
  const [types, setTypes] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch(`http://localhost:3200/room/find/types`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const types = await res.json();
        setTypes(types);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTypes();
  }, []);
  return (
    <section className=" h-full w-full my-[10rem]   border-b ">
      <div className="wrapper h-full  mx-auto my-0 ">
        <div className="titles flex flex-col items-center justify-center gap-3 mb-[4rem]">
          <h5 className="subtitle text-[#333] text-[22px] font-[500] ">
            Residing place
          </h5>
          <h2 className="title text-[36px] font-bold text-bg-main ">
            What type of place you want
          </h2>
        </div>
        {/* <div className="types grid grid-cols-4 gap-x-[1.5rem] ">
          {Object.entries(types).map(([key, value]) => (
            <Link
              to={`/types/${key}`}
              key={key + value}
              className="type relative rounded-[15px] ">
              <div className="imgWrapper h-[300px]  w-full relative overflow-hidden ">
                <img
                  src={
                    key === "villa"
                      ? villa
                      : key === "penthouse"
                      ? penthouse
                      : key === "bungalow"
                      ? bungalow
                      : key === "apartment"
                      ? apartment
                      : img2
                  }
                  alt=""
                  className=" hover:scale-[1.1] w-full h-full transition-all relative object-cover rounded-md "
                />
              </div>
              <span className="absolute bottom-0 left-0 text-[#fff] text-[20px] bg-bg-main px-[1.3rem] py-[4px] rounded-tr-md">
                {key} {value}
              </span>
            </Link>
          ))}
        </div> */}
        <div className="flex flex-wrap bg-black">
          {Object.entries(types).map(([key, value]) => (
            <Link
              to={`/types/${key}`}
              key={key + value}
              className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 ">
              <div className=" ">
                <span className="relative z-10">
                  {key} {value}
                </span>
                <img
                  src={
                    key === "villa"
                      ? villa
                      : key === "penthouse"
                      ? penthouse
                      : key === "bungalow"
                      ? bungalow
                      : key === "apartment"
                      ? apartment
                      : img2
                  }
                  alt=""
                  className=" absolute inset-0 w-full h-full object-cover opacity-50 "
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Types;
