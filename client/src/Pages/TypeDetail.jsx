import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import Modal from "react-modal";
import FileBase64 from "react-file-base64";
import axios from "axios";

import Time from "react-time-format";

import { getDatesInRange, isUnavailable } from "../utils/dateFunc";
import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import CommentSection from "./CommentSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const TypeDetail = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const [roomDetails, setRoomDetails] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const id = useParams().id;
  const containerRef = useRef();
  useEffect(() => {
    const fetchRoom = async () => {
      const res = await fetch(`http://localhost:3200/room/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const room = await res.json();
      setRoomDetails(room);
    };
    fetchRoom();
  }, []);
  console.log();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Modal Update

  const [data, setData] = useState({
    title: "",
    desc: "",
    photo: "",
    country: "",
    type: "",
    price: null,
    review: "null",
  });

  useEffect(() => {
    if (roomDetails) {
      setData(roomDetails);
    }
  }, [roomDetails]);

  const afterOpenModalUpdate = () => {};

  const closeModalUpdate = () => {
    setModalUpdateIsOpen(false);
  };

  const openModalUpdate = () => {
    setModalUpdateIsOpen(true);
  };

  const handleUpdateProduct = async (e) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      await axios.put(`http://localhost:3200/room/${id}`, data, {
        headers,
      });
      // navigate(`/typeDetail/${room?.data?._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  // Modal Delete

  //
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDeleteProduct = async (e) => {
    try {
      await fetch(`http://localhost:3200/room/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "delete",
      });
      navigate("/");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        ref={containerRef}
        className="typeDetail h-full w-full mx-0 py-[4rem]   ">
        <div className="wrapper  w-full my-0 mx-auto  gap-36 items-start relative">
          <div className="left flex-1  ">
            <div className="imgWrapper h-96 w-full overflow-hidden    ">
              <img
                src={`${roomDetails?.photo?.url}`}
                alt="img"
                className="h-full w-full object-cover   "
              />
            </div>
          </div>

          <div className="right  max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-1 ">
            <div className="right-7 top-16 absolute">
              <button
                onClick={openModalUpdate}
                className="bg-transparent hover:bg-bg-main text-bg-main font-semibold hover:text-white py-2 px-4 border border-bg-main hover:border-transparent rounded  ">
                UPDATE
              </button>

              <button
                onClick={openModal}
                className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded  ml-4">
                DELETE
              </button>
            </div>

            <h2 className="mt-2 uppercase tracking-widest text-xs text-gray-900">
              <Time
                className="ml-1"
                value={roomDetails.createdAt}
                format="DD/MM/YYYY"
              />
            </h2>
            <h1 className="title font-display text-2xl md:text-3xl text-gray-900 mt-4 ">
              {roomDetails.title}
            </h1>
            <div className="mt-6 prose lg:prose-xl">
              <p className="type   ">
                Type:
                <span className="ml-2 text-lg font-light leading-relaxed mt-0 mb-0 uppercase">
                  {roomDetails.type}
                </span>
              </p>
              <div className="review flex items-center  ">
                Review: <span className="ml-2">{roomDetails.review}</span>
                <AiFillStar className="icon mr-2 text-bg-main text-[17px]" />
              </div>
              <p className="desc ">
                <span className=" ml-4 text-lg font-light leading-relaxed mt-6 mb-4">
                  {roomDetails?.desc}
                </span>
              </p>
              <div className="priceAndCountry flex justify-between mt-4">
                <span className="text-lg font-light leading-relaxed mt-0 mb-4 ">
                  Country:{" "}
                  <span className="text-lg font-light leading-relaxed mt-0 mb-4 ">
                    {roomDetails.country}
                  </span>
                </span>
                <span>
                  <span className="price ml-2 text-lg font-light leading-relaxed mt-0 mb-4">
                    {roomDetails?.price}$
                  </span>
                </span>
              </div>
            </div>

            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-20 right-5"
                role="alert">
                <strong className="font-bold">Warning: </strong>
                <span className="block sm:inline">
                  Your date is in the booked range! Last booked day is {error}
                </span>
              </div>
            )}
            {success && (
              <div
                className="bg-[green] border border-red-400 text-[#fff] px-4 py-3 rounded fixed top-20 right-5"
                role="alert">
                <strong className="font-bold">Success: </strong>
                <span className="block sm:inline">
                  Success! You booked from {startDate} to {endDate} {error}
                </span>
              </div>
            )}
          </div>
        </div>
        <CommentSection id={id} />
        {/* Modal update */}
        <Modal
          isOpen={modalUpdateIsOpen}
          onAfterOpen={afterOpenModalUpdate}
          onRequestClose={closeModalUpdate}
          style={customStyles}
          contentLabel="Example Modal">
          <div className="flex items-center justify-center    ">
            <div className="wrapper flex flex-col    border border-solid border-[#444]   p-[1.5rem] ">
              <h2 className="title text-center mb-[1.5rem] text-[26px] font-bold ">
                Update room
              </h2>
              <form
                onSubmit={handleUpdateProduct}
                encType="multipart/form-data">
                <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
                  <label className="mr-[15px] w-[33%] ">Title: </label>
                  <input
                    type="text"
                    value={data.title}
                    onChange={(e) => {
                      setData({ ...data, title: e.target.value });
                    }}
                    className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
                    placeholder="Title..."
                  />
                </div>
                <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
                  <label className="mr-[15px] w-[33%] ">Description: </label>
                  <textarea
                    type="text"
                    value={data.desc}
                    onChange={(e) => {
                      setData({ ...data, desc: e.target.value });
                    }}
                    className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
                    placeholder="Desc..."
                  />
                </div>
                <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
                  <label className="mr-[15px] w-[33%] ">Country: </label>
                  <input
                    type="text"
                    value={data.country}
                    onChange={(e) => {
                      setData({ ...data, country: e.target.value });
                    }}
                    className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
                    placeholder="Country..."
                  />
                </div>
                <div className="inputWrapper w-full flex center  items-center mb-[0.5rem]">
                  <label className="mr-[15px] w-[33%] ">Type: </label>
                  <select
                    onChange={(e) => setData({ ...data, type: e.target.value })}
                    value={data.type}
                    className="pr-[0.6rem] py-[0.2rem] bg-[#f7f7f7] text-[rgb(201,136,15)] font-bold border-none border-[1px] border-[solid] border-[orange]">
                    <option disabled>Select Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="bungalow">Bungalow</option>
                  </select>
                </div>
                <div className="inputWrapperImg w-[400px] flex items-center mb-[0.5rem]">
                  <FileBase64
                    accept="image/*"
                    multiple={false}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="file"
                    value={data.photo?.url}
                    onDone={({ base64 }) => setData({ ...data, photo: base64 })}
                  />
                </div>
                <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
                  <label className="mr-[15px] w-[33%]">Price: </label>
                  <input
                    value={data.price}
                    onChange={(e) => {
                      setData({ ...data, price: e.target.value });
                    }}
                    type="number"
                    step={1}
                    className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)] "
                    placeholder="Price..."
                  />
                </div>
                <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
                  <label className="mr-[15px] w-[33%]">Review: </label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    step={0.1}
                    value={data.review}
                    onChange={(e) => {
                      setData({ ...data, review: e.target.value });
                    }}
                    className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
                    placeholder="Review..."
                  />
                </div>
                <div className="buttonWrapper flex items-center justify-center mt-[2px]">
                  <button className="SubmitBtn hover:bg-[#fff] hover:text-[#cea600] hover:border-[#cea600] w-full bg-[#cea600] text-[#fff] px-[1.25rem] py-[0.75rem]  border border-solid border-transparent cursor-pointer transition-all mt-[1rem] rounded-2xl">
                    Update Room
                  </button>
                </div>
              </form>
              {typeError && (
                <div
                  className="bg-[green] border border-[grren] text-[#fff] px-4 py-3 rounded absolute top-[3.5rem] right-5"
                  role="alert">
                  {/* <strong className="font-bold">Warning: </strong> */}
                  <span className="block sm:inline">
                    Wrong Type! Acceptable types are - apartment, villa,
                    penhouse and bungalow
                  </span>
                </div>
              )}
            </div>
          </div>
        </Modal>
        {/* Modal delete */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <div
            id="popup-modal"
            tabindex="-1"
            className=" top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-md md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="popup-modal">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only" onClick={closeModal}>
                    Close modal
                  </span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    onClick={handleDeleteProduct}
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                  </button>
                  <button
                    onClick={closeModal}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default TypeDetail;
