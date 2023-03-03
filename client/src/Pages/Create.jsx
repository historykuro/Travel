import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(null);
  const [review, setReview] = useState(null);
  const [typeError, setTypeError] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  console.log(img);

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    const acceptableTypes = ["apartment", "penthouse", "bungalow", "villa"];

    if (!acceptableTypes.includes(type)) {
      setTypeError(true);
      setTimeout(() => {
        setTypeError(false);
      }, 10 * 1000);
    }
    try {
      const formData = new FormData();

      let filename = null;
      if (img) {
        filename = Date.now() + img.name;
        // for first img
        formData.append("filename", filename);
        formData.append("image", img);

        await fetch(`http://localhost:3200/upload/image`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: formData,
        });

        // upload product and navigate to product
        const res = await fetch("http://localhost:3200/room", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            country,
            type,
            photo: filename,
            price,
            review,
          }),
        });
        const room = await res.json();
        navigate(`/typeDetail/${room?._id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseimg = () => {
    setImg((prev) => null);
  };
  const onChangeFileFirst = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div className=" h-[calc(100vh-65px)] w-full flex items-center justify-center  mb-[10rem] pt-[10rem] ">
      <div className="wrapper flex flex-col  border border-solid border-[#444] rounded-[22px] p-[1.5rem] ">
        <h2 className="title text-center mb-[1.5rem] text-[26px] font-bold ">
          Create room
        </h2>
        <form onSubmit={handleCreateRoom} encType="multipart/form-data">
          <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
            <label className="mr-[15px] w-[33%] ">Title: </label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
              placeholder="Title..."
            />
          </div>
          <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
            <label className="mr-[15px] w-[33%] ">Description: </label>
            <input
              type="text"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
              placeholder="Desc..."
            />
          </div>
          <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
            <label className="mr-[15px] w-[33%] ">Country: </label>
            <input
              type="text"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
              placeholder="Country..."
            />
          </div>
          <div className="inputWrapper w-full flex center  items-center mb-[0.5rem]">
            <label className="mr-[15px] w-[33%] ">Type: </label>

            <select
              onChange={(e) => setType(e.target.value)}
              className="pr-[0.6rem] py-[0.2rem] bg-[#f7f7f7] text-[rgb(201,136,15)] font-bold border-none border-[1px] border-[solid] border-[orange]">
              <option disabled>Select Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="bungalow">Bungalow</option>
            </select>
          </div>
          <div className="inputWrapperImg w-[400px] flex items-center mb-[0.5rem]">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"></label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              onChange={onChangeFileFirst}
            />
          </div>
          <div className="inputWrapper w-full flex center justify-end items-center mb-[0.5rem]">
            <label className="mr-[15px] w-[33%]">Price: </label>
            <input
              type="number"
              step={1}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
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
              onChange={(e) => {
                setReview(e.target.value);
              }}
              className="input focus:outline-none focus:border-[rgb(99,92,92)] p-[0.5rem] w-[77.5%] rounded-[8px]  border border-solid border-[rgb(170,165,165)]"
              placeholder="Review..."
            />
          </div>
          <div className="buttonWrapper flex items-center justify-center mt-[2px]">
            <button className="SubmitBtn hover:bg-[#fff] hover:text-[#cea600] hover:border-[#cea600] w-full bg-[#cea600] text-[#fff] px-[1.25rem] py-[0.75rem]  border border-solid border-transparent cursor-pointer transition-all mt-[1rem] rounded-2xl">
              Create Room
            </button>
          </div>
        </form>
        {typeError && (
          <div
            className="bg-[green] border border-[grren] text-[#fff] px-4 py-3 rounded absolute top-[3.5rem] right-5"
            role="alert">
            {/* <strong className="font-bold">Warning: </strong> */}
            <span className="block sm:inline">
              Wrong Type! Acceptable types are - apartment, villa, penhouse and
              bungalow
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
