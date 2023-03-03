import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import login from "../assets/img/login.jpg";
import { AiFillStar } from "react-icons/ai";

const SuggestedPlaces = () => {
  const [estates, setEstates] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchTypeRoom = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const res = await axios.get(
          `https://travel-vh79.vercel.app/room/limit`,
          {
            headers,
          }
        );

        setEstates(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTypeRoom();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="suggested"
      className=" w-4/5  cursor-default mx-auto mt-[10rem] my-[3rem] border-b  ">
      <div className="wrapper h-full w-[90%] my-0 mx-auto ">
        <div className="titles flex flex-col items-center justify-center gap-[12px] mb-[4rem]">
          <h5 className="subtitle text-[#333] text-[22px] font-[500]">
            Most visited places
          </h5>
          <div className="title text-[36px] font-bold text-bg-main">
            Favourite destination of our clients
          </div>
        </div>
        <div className="places my-0 mx-auto mt-[50px] ">
          <Slider {...settings}>
            {estates.map((suggestedPlace) => (
              <Link
                to={`/typeDetail/${suggestedPlace._id}`}
                key={suggestedPlace}
                className="place h-[450px] w-full bg-[#fff] rounded-xl mb-[7.5rem] relative transition-all shadow-y  ">
                <div className="imgWrapper h-[300px] w-full overflow-hidden rounded-t-xl opacity-80 hover:opacity-100 duration-200 space-y-2 text-left ">
                  <img
                    src={`https://travel-vh79.vercel.app/images/${suggestedPlace?.photo}`}
                    alt={suggestedPlace.photo}
                    className="w-full h-full object-cover rounded-t-lg hover:scale-[1.035]  bg-[black] transition-all  "
                  />
                </div>

                <div className="titleAndReview p-4 flex justify-between items-center">
                  <span className="title text-red-400 font-[500] text-[24px] uppercase line-clamp-1 w-2/3">
                    {suggestedPlace.title}
                  </span>

                  <span className="price font-bold text-[20px] ">
                    {suggestedPlace.price}$<span className="text-[#000]"></span>
                  </span>
                </div>
                <div className="countryAndPrice p-[1rem] flex justify-between items-center  ">
                  <span className=" text-[#000] text-[22px] font-[500] line-clamp-1">
                    Country:
                    <span className="font-semibold mx-1 ">
                      {suggestedPlace.country}
                    </span>
                  </span>

                  <span className="review flex items-center gap-[6px] text-[20px] text-bg-main">
                    <AiFillStar className=" text-[18px]" />
                    {suggestedPlace.review}
                  </span>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SuggestedPlaces;
