import React from "react";

const Footer = () => {
  return (
    <div className=" w-full    h-[400px] bg-gray-900 bg-opacity-80  text-opacity-80  ">
      <div className="container mx-auto my-0  h-full w-[90%] grid grid-cols-3 ">
        <div className="col flex-1 flex flex-col justify-center h-full gap-[1rem] ">
          <h2 className="title text-[30px] font-semibold text-white uppercase tracking-widest">
            FAQ
          </h2>
          <span className=" text-[18px] text-white opacity-40">
            Where we are based
          </span>
          <span className=" text-[18px] text-white opacity-40">
            How we operate
          </span>
          <span className=" text-[18px] text-white opacity-40">
            Refund policy
          </span>
        </div>
        <div className="col flex-1 flex flex-col justify-center h-full gap-[1rem] ">
          <h2 className="title text-[30px] font-semibold text-white uppercase tracking-widest">
            Contacts
          </h2>
          <span className=" text-[18px] text-white opacity-40">Devthien</span>
          <span className=" text-[18px] text-white opacity-40">Devthien</span>
          <span className=" text-[18px] text-white opacity-40">Devthien</span>
        </div>
        <div className="col flex-1 flex flex-col justify-center h-full gap-[1rem] ">
          <h2 className="title text-[30px] font-semibold text-white uppercase tracking-widest">
            Privacy policy
          </h2>
          <p className="max-w-[500px] text-[18px] text-white opacity-40 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
            corrupti quae voluptas dolores asperiores dolorum eaque eos adipisci
            minima nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
