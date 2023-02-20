import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        const res = await fetch(`http://localhost:3200/room`, {
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
    fetchTypeRoom();
  }, [estates]);

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
      className=" h-full w-full mx-0 mt-[24rem] my-[3rem] pt-[2rem]">
      <div className="wrapper h-full w-[90%] my-0 mx-auto">
        <div className="titles flex flex-col items-center justify-center gap-[12px] mb-[4rem]">
          <h5 className="subtitle text-[#333] text-[22px] font-[500]">
            Most visited places
          </h5>
          <div className="title text-[36px] font-bold text-bg-main">
            Favourite destination of our clients
          </div>
        </div>
        <div className="places my-0 mx-auto mt-[50px]">
          <Slider {...settings}>
            {estates.map((suggestedPlace) => (
              <Link
                to={`/typeDetail/${suggestedPlace._id}`}
                key={suggestedPlace}
                className="place h-[500px] w-full bg-[#fff] rounded-[24px] mb-[7.5rem] relative transition-all shadow-y  ">
                <div className="imgWrapper h-[350px] w-full overflow-hidden rounded-t-[24px] ">
                  <img
                    src={`http://localhost:3200/images/${suggestedPlace?.photo}`}
                    alt={suggestedPlace.photo}
                    className="w-full h-full object-cover hover:scale-[1.035]  bg-[black] transition-all  "
                  />
                </div>

                <div className="titleAndReview p-4 flex justify-between items-center">
                  <span className="title text-bg-main font-[500] text-[24px] uppercase">
                    {suggestedPlace.title}
                  </span>

                  <span className="price text-bg-main text-[20px] mr-1">
                    {suggestedPlace.price}$ /
                    <span className="text-[#000]"> person</span>
                  </span>
                </div>
                <div className="countryAndPrice p-[1rem] flex justify-between items-center ">
                  <span className=" text-[#000] text-[22px] font-[500]">
                    Country:
                    <span className="text-bg-main mx-1">
                      {suggestedPlace.country}
                    </span>
                  </span>

                  <span className="review flex items-center gap-[6px] text-[20px]">
                    <AiFillStar className="text-bg-main text-[18px]" />
                    {suggestedPlace.review} (2)
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
