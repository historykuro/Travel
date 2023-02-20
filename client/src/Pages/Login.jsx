import React from "react";

import { useState } from "react";
import {useDispatch} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import loginImg from '../assets/img/login.jpg';
import { login } from '../redux/authSlice';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3200/auth/login`,{
        headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email, password})

      })
      if(res.status === 404){
            throw new Error("Wrong credentials")
        }
      const data = await res.json()
      dispatch(login(data))
      navigate("/")
    } catch (error) {
      setError(prev => true)
        setTimeout(() => {
            setError(prev => false)
        }, 2500)
    }

  }

   
  
  return (

  <div className="h-screen w-screen bg-bg-main absolute z-50">
     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                  <h1 className="text-3xl font-semibold text-center text-[orange] underline">
                     Login
                  </h1>
                  <form className="mt-6" onSubmit={handleLogin}>
                      <div className="mb-2">
                          <label
                              for="email"
                              className="block text-sm font-semibold text-gray-800"
                          >
                              Email
                          </label>
                          <input
                              type="email"
                              onChange={(e )=> setEmail(e.target.value)}
                              placeholder="Type email"
                              className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                      </div>
                      <div className="mb-2">
                          <label
                              for="password"
                              className="block text-sm font-semibold text-gray-800"
                          >
                              Password
                          </label>
                          <input
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Type password"
                              className="block w-full px-4 py-2 mt-2 text-[orange] bg-white border rounded-md focus:border-bg-main focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                      </div>
                      <a
                          href="#"
                          className="text-xs text-[orange] hover:underline"
                      >
                          Forget Password?
                      </a>
                      <div className="mt-6">
                          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-bg-main rounded-md hover:bg-bg-main focus:outline-none focus:bg-bg-main">
                              Login
                          </button>
                      </div>
                  </form>
                  {error && 
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-5 right-5" role="alert">
                      <strong className="font-bold">Warning: </strong>
                      <span className="block sm:inline">Wrong credentials! Try different ones.</span>
                      {/* <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                      </span> */}
                  </div>  
                    }
                  <p className="mt-8 text-xs font-light text-center text-gray-700">
                      {" "}
                      Don't have an account?{" "}
                      <Link
                          to='/register'
                          className="font-medium text-[orange] hover:underline"
                      >
                          Register
                      </Link>
                  </p>
              </div>
              
          </div>
    
  </div>
  )

};

export default Login;
