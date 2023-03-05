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

    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const data = await axios.post(
        `http://localhost:3200/auth/register`,
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

  return (
    // <div className="h-screen w-screen bg-bg-main absolute z-50">
    //   <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    //     <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
    //       <h1 className="text-3xl font-semibold text-center text-[orange] underline">
    //         Register
    //       </h1>
    //       <form
    //         className="mt-6"
    //         onSubmit={handleRegister}
    //         encType="multipart/form-data">
    //         <div className="mb-2">
    //           <label
    //             htmlFor="Username"
    //             className="block text-sm font-semibold text-gray-800">
    //             Username
    //           </label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setUsername(e.target.value);
    //             }}
    //             placeholder="Username"
    //             className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //           />
    //         </div>
    //         <div className="mb-2">
    //           <label
    //             htmlFor="email"
    //             className="block text-sm font-semibold text-gray-800">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             onChange={(e) => {
    //               setEmail(e.target.value);
    //             }}
    //             placeholder="Email"
    //             className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //           />
    //         </div>
    //         <div className="mb-2">
    //           <label
    //             htmlFor="password"
    //             className="block text-sm font-semibold text-gray-800">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //           />
    //         </div>
    //         <div className="mb-2">
    //           <label
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             htmlFor="file_input">
    //             Avatar
    //           </label>
    //           {/* <input
    //             class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //             id="file_input"
    //             type="file"
    //             onChange={onChangeFileFirst}
    //           /> */}
    //           <FileBase64
    //             accept="image/*"
    //             multiple={false}
    //             className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //             type="file"
    //             value={img}
    //             onDone={({ base64 }) => setImg(base64)}
    //           />
    //         </div>
    //         {/* <div className="mb-2">
    //                       <label
    //                           for="Confirm Password"
    //                           className="block text-sm font-semibold text-gray-800"
    //                       >
    //                           Confirm Password
    //                       </label>
    //                       <input
    //                           type="password"
    //                           placeholder="Confirm Password"
    //                           className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //                       />

    //                   </div> */}
    //         <a href="#" className="text-xs text-[orange] hover:underline">
    //           Forget Password?
    //         </a>
    //         <div className="mt-6">
    //           <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-bg-main rounded-md hover:bg-bg-main focus:outline-none focus:bg-bg-main">
    //             Register
    //           </button>
    //         </div>
    //       </form>
    //       {error && (
    //         <div
    //           className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-5 right-5"
    //           role="alert">
    //           <strong className="font-bold">Warning: </strong>
    //           <span className="block sm:inline">
    //             Wrong credentials! Try different ones.
    //           </span>
    //           {/* <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    //                     <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
    //                   </span> */}
    //         </div>
    //       )}
    //       <p className="mt-8 text-xs font-light text-center text-gray-700">
    //         {" "}
    //         Don't have an account?{" "}
    //         <Link
    //           to="/login"
    //           className="font-medium text-[orange] hover:underline">
    //           login
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <section class="h-screen">
      <div class="h-full">
        <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleRegister}>
              <div class="flex flex-row items-center justify-center lg:justify-start">
                <p class="mb-0 mr-4 text-lg">Register</p>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </div>

              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label
                  for="exampleFormControlInput2"
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">
                  Username
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  for="exampleFormControlInput2"
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">
                  Email address
                </label>
              </div>

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput22"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  for="exampleFormControlInput22"
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">
                  Password
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <FileBase64
                  accept="image/*"
                  multiple={false}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                  type="file"
                  value={img}
                  onDone={({ base64 }) => setImg(base64)}
                />
              </div>

              <div class="mb-6 flex items-center justify-between">
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="exampleCheck2">
                    Remember me
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="submit"
                  class="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  REGISTER
                </button>
                <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <Link
                    to="/login"
                    class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
