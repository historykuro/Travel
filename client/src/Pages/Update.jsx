import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Update = ({ roomDetails }) => {
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
  const [data, setData] = useState({
    title: "",
    desc: "",
    img: "",
    country: "",
    type: "",
    price: null,
    review: "null",
  });
  console.log(roomDetails);
  const handleCreateRoom = async (e) => {
    e.preventDefault();
    const acceptableTypes = ["apartment", "penthouse", "bungalow", "villa"];

    if (!acceptableTypes.includes(type)) {
      setTypeError(true);
      setTimeout(() => {
        setTypeError(false);
      }, 10 * 1000);
    }
  };

  const handleCloseimg = () => {
    setImg((prev) => null);
  };
  const onChangeFileFirst = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div className="container h-[calc(100vh-65px)] w-full flex items-center justify-center pt-[5rem] pb-[5rem] mt-[4.5rem] ">
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
              htmlFor="img"
              className="fileInputLabel flex items-center gap-[5rem]">
              Image:{" "}
              <span className=" hover:bg-[#fff] hover:text-[teal] hover:border-[teak]  inline-block px-[1rem] py-[0.5rem] bg-[teal] text-[#fff] border border-solid border-transparent cursor-pointer transition-all rounded-[16px] mx-[0.25rem] my-[0.1rem]">
                Upload here
              </span>
            </label>
            <input
              type="file"
              filename="img"
              id="img"
              onChange={onChangeFileFirst}
              placeholder="image..."
              className="hidden"
            />
            {img && (
              <p className="imageName absolute right-[35rem] flex items-center gap-[6px] text-[14px]">
                {img.name}{" "}
                <AiOutlineCloseCircle
                  className="icon cursor-pointer text-[16px] "
                  onClick={() => handleCloseimg()}
                />
              </p>
            )}
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

export default Update;
