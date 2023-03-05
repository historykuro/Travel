import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Time from "react-time-format";
import ReactPaginate from "react-paginate";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ListPlaces = () => {
  const id = useParams().id;
  console.log(id);

  const { token } = useSelector((state) => state.auth);
  const [items, setItems] = useState("");
  const [itemOffset, setItemOffset] = useState(1);
  console.log(items);

  useEffect(() => {
    const fetchImg = async () => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get(`http://localhost:3200/room`, {
        headers,
      });
      setItems(res.data.reverse());
    };
    fetchImg();
  }, []);
  console.log(items);

  const endOffset = itemOffset + 4;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 4);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //   Style ReactPaginate
  const containerStyle =
    "sm:flex   w-full  flex items-center  border-t border-gray-200 relative";

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
      <div className="h-full w-full">
        <div className="text-center py-12 px-6 pt-20">
          <h1 className="font-display font-bold text-5xl mb-6 text-bg-main">
            List Places
          </h1>
          <p className="max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            arcu commodo, sodales nibh sed, efficitur sapien.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
          {currentItems ? (
            currentItems.map((item, index) => (
              <div key={index}>
                <Link to={`/typeDetail/${item._id}`}>
                  <img
                    src={`${item.photo?.url}`}
                    alt={item.photo?.url}
                    className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover"
                  />
                </Link>

                <div className="bg-gray-50 p-8">
                  <Time
                    className="text-xs text-gray-600 uppercase font-semibold"
                    value={item.createdAt}
                    format="DD/MM/YYYY"
                  />

                  <h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-md line-clamp-2">{item.desc}</p>
                  <Link to={`/typeDetail/${item._id}`}>
                    <button className="flex  items-center justify-start mt-6 uppercase text-sm bg-transparent hover:bg-bg-main text-bg-main font-semibold hover:text-white py-2 px-4 border border-bg-main hover:border-transparent rounded">
                      Read article
                      <AiOutlineRight className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No Data</div>
          )}
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

export default ListPlaces;
