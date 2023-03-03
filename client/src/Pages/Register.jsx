import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/authSlice";
import axios from "axios";
import FileBase64 from "react-file-base64";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(img);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    let filename = null;

    // try {
    //   if (img) {
    //     filename = Date.now() + img.name;
    //     // for first img
    //     formData.append("filename", filename);
    //     formData.append("image", img);

    //     await axios.post(`https://travel-vh79.vercel.app/upload/image`, {
    //       body: formData,
    //     });
    //   }

    //   // Register
    //   const headers = {
    //     "Content-Type": "multipart/form-data",
    //   };

    //   const data = await axios.post(
    //     `https://travel-vh79.vercel.app/auth/register`,
    //     {
    //       username,
    //       email,
    //       password,
    //       img: filename,
    //     },
    //     headers
    //   );
    //   dispatch(register(data.data));
    //   navigate("/login");

    //   // const res = await fetch(`https://travel-vh79.vercel.app/auth/register`, {
    //   //   headers: {
    //   //     "Content-Type": "application/json",
    //   //   },
    //   //   method: "POST",
    //   //   body: JSON.stringify({ username, email, password, img: filename }),
    //   // });
    //   // const data = await res.json();
    //   // console.log(data);
    //   // dispatch(register(data));
    //   // navigate("/login");
    // } catch (error) {
    //   setError((prev) => true);
    //   setTimeout(() => {
    //     setError((prev) => false);
    //   }, 2500);
    //   console.error(error);
    // }

    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const data = await axios.post(
        `https://travel-vh79.vercel.app/auth/register`,
        {
          username,
          email,
          password,
          img,
        },
        headers
      );
      dispatch(register(data.data));
      navigate("/login");
    } catch (error) {
      setError((prev) => true);
      setTimeout(() => {
        setError((prev) => false);
      }, 2500);
      console.error(error);
    }
  };
  const onChangeFileFirst = (e) => {
    setImg(e.target.files[0]);
  };
  return (
    <div className="h-screen w-screen bg-bg-main absolute z-50">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-[orange] underline">
            Register
          </h1>
          <form
            className="mt-6"
            onSubmit={handleRegister}
            encType="multipart/form-data">
            <div className="mb-2">
              <label
                htmlFor="Username"
                className="block text-sm font-semibold text-gray-800">
                Username
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Username"
                className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input">
                Avatar
              </label>
              {/* <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                onChange={onChangeFileFirst}
              /> */}
              <FileBase64
                accept="image/*"
                multiple={false}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                value={img}
                onDone={({ base64 }) => setImg(base64)}
              />
            </div>
            {/* <div className="mb-2">
                          <label
                              for="Confirm Password"
                              className="block text-sm font-semibold text-gray-800"
                          >
                              Confirm Password
                          </label>
                          <input
                              type="password"
                              placeholder="Confirm Password"
                              className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                          
                      </div> */}
            <a href="#" className="text-xs text-[orange] hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-bg-main rounded-md hover:bg-bg-main focus:outline-none focus:bg-bg-main">
                Register
              </button>
            </div>
          </form>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-5 right-5"
              role="alert">
              <strong className="font-bold">Warning: </strong>
              <span className="block sm:inline">
                Wrong credentials! Try different ones.
              </span>
              {/* <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                      </span> */}
            </div>
          )}
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[orange] hover:underline">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
