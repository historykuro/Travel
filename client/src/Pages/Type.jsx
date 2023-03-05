import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { AiFillStar } from "react-icons/ai";
import Time from "react-time-format";
import ReactPaginate from "react-paginate";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Type = () => {
  const [estates, setEstates] = useState([]);
  const { type } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [itemOffset, setItemOffset] = useState(1);

  useEffect(() => {
    const fetchTypeRooms = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const res = await axios.get(
          `https://travel-mu-liard.vercel.app//room?type=${type}`,
          {
            headers,
          }
        );

        setEstates(res.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };
    fetchTypeRooms();
  }, []);

  // ReactPaginate

  const endOffset = itemOffset + 4;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = estates.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(estates.length / 4);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % estates.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //   Style ReactPaginate
  const containerStyle =
    "sm:flex hidden  w-full  flex items-center  border-t border-gray-200 relative";

  const pagination_page =
    "  text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2";

  const activePagination =
    "text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2";

  const nextPagination = (
    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer pl-8">
      <p className="text-sm font-medium leading-none mr-3">Next</p>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.1665 4H12.8332"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 7.33333L12.8333 4"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 0.666687L12.8333 4.00002"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );

  const previousPagination = (
    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer pr-8">
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.1665 4H12.8332"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.1665 4L4.49984 7.33333"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.1665 4.00002L4.49984 0.666687"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
    </div>
  );
  return (
    <>
      <Navbar />
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
            {estates.map((estate, index) => (
              <Link
                to={`/typeDetail/${estate._id}`}
                key={index}
                className="place h-[450px] w-full bg-[#fff] rounded-xl mb-[7.5rem] relative transition-all shadow-y  ">
                <div className="imgWrapper h-[300px] w-full overflow-hidden rounded-t-xl opacity-80 hover:opacity-100 duration-200 space-y-2 text-left ">
                  <img
                    src={`${estate?.photo?.url}`}
                    alt={estate.photo?.url}
                    className="w-full h-full object-cover rounded-t-lg hover:scale-[1.035]  bg-[black] transition-all  "
                  />
                </div>

                <div className="titleAndReview p-4 flex justify-between items-center">
                  <span className="title text-red-400 font-[500] text-[24px] uppercase line-clamp-1 w-2/3">
                    {estate.title}
                  </span>

                  <span className="price font-bold text-[20px] ">
                    {estate.price}$<span className="text-[#000]"></span>
                  </span>
                </div>
                <div className="countryAndPrice p-[1rem] flex justify-between items-center  ">
                  <span className=" text-[#000] text-[22px] font-[500] line-clamp-1">
                    Country:
                    <span className="font-semibold mx-1 ">
                      {estate.country}
                    </span>
                  </span>

                  <span className="review flex items-center gap-[6px] text-[20px] text-bg-main">
                    <AiFillStar className=" text-[18px]" />
                    {estate.review}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="">
          <ReactPaginate
            activeClassName={activePagination}
            // breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={containerStyle}
            // disabledClassName={"disabled-page"}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            pageClassName={pagination_page}
            pageRangeDisplayed={2}
            // previousClassName={previousPagination}
            nextLabel={nextPagination}
            previousLabel={previousPagination}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Type;
