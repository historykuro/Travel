import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Places = () => {
  const { token } = useSelector((state) => state.auth);
  const [img, setImg] = useState("");
  useEffect(() => {
    const fetchImg = async () => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get(`http://localhost:3200/room`, {
        headers,
      });
      setImg(res.data.reverse());
    };
    fetchImg();
  }, []);
  console.log(img[0]?.photo);

  return (
    <section className="places  " id="places">
      <div className="w-4/5 hidden lg:block  m-auto cursor-default">
        <div className="w-full xl:w-1/2  m-auto text-center my-10 mt-[10rem] space-y-5">
          <h1 className="text-4xl font-bold text-bg-main">
            Places not to be missed
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, a
            quibusdam. Et nostrum accusamus sunt fugiat, corrupti aut sint
            totam.
          </p>
        </div>
        <div className="hidden md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
          <Link
            to={`/typeDetail/${img[0]?._id}`}
            className="row-span-1 col-span-2">
            <img
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={`http://localhost:3200/images/${img[0]?.photo}`}
              alt=""
            />
          </Link>
          <Link
            to={`/typeDetail/${img[1]?._id}`}
            className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={`http://localhost:3200/images/${img[1]?.photo}`}
              alt=""
            />
          </Link>
          <Link
            to={`/typeDetail/${img[2]?._id}`}
            className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={`http://localhost:3200/images/${img[2]?.photo}`}
              alt=""
            />
          </Link>
          <Link
            to={`/typeDetail/${img[3]?._id}`}
            className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1">
            <img
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={`http://localhost:3200/images/${img[3]?.photo}`}
              alt=""
            />
          </Link>
          <Link
            to={`/typeDetail/${img[4]?._id}`}
            className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={`http://localhost:3200/images/${img[4]?.photo}`}
              alt=""
            />
          </Link>
          <Link
            to={`/typeDetail/${img[5]?._id}`}
            className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={`http://localhost:3200/images/${img[5]?.photo}`}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Places;
