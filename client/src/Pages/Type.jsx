import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import img1 from "../assets/img/img2.jpg";
import { AiFillStar } from "react-icons/ai";

const Type = () => {
  const [estates, setEstates] = useState([]);
  const { type } = useParams();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchTypeRooms = async () => {
      try {
        const res = await fetch(`http://localhost:3200/room?type=${type}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const estates = await res.json();
        setEstates(estates);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTypeRooms();
  }, [estates]);
  return (
    <div className=" h-full w-full mx-0 ">
      <div className="wrapper h-full w-[90%] mx-auto my-0  pt-[5rem]">
        <div className="titles flex flex-col items-center justify-center gap-[12px] mb-[4rem] ">
          <h5 className="subtitle text-[#333] text-[22px] font-[500]">
            All {type}s
          </h5>
          <h2 className="title text-[36px] font-bold text-bg-main ">
            Pick from the best {type}s
          </h2>
        </div>
        <div className="places  grid grid-cols-3 mt-[5rem] gap-[5rem]">
          {estates.map((estate) => (
            <Link
              to={`/typeDetail/${estate._id}`}
              className="place hover:scale-[1.035] h-[500px] w-full rounded-[24px] mb-[7.5rem] transition-all text-inherit shadow-x"
              key={estate._id}>
              <div className="imgWrapper h-[350px] w-full overflow-hidden rounded-t-[24px]  ">
                <img
                  src={`http://localhost:3200/images/${estate.photo}`}
                  className="w-full h-full object-cover"
                  alt="img"
                />
              </div>
              <div className="titleAndReview p-[1rem] flex justify-between items-center uppercase">
                <span className="text-bg-main font-[500] text-2xl">
                  {estate.title}
                </span>
                <span className="review flex items-center gap-[6px] text-[20px]">
                  <AiFillStar className="icon text-bg-main text-lg" />
                  {estate.review}
                </span>
              </div>
              <div className="countryAndPrice p-[1rem] flex justify-between items-center">
                <span className="text-[#000] text-[22px] font-[500]">
                  Country:{" "}
                  <span className="text-bg-main">{estate.country}</span>
                </span>
                <span className="price text-bg-main text-[20px]">
                  {estate.price}$ / <span className="text-[#000]">person</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Type;
