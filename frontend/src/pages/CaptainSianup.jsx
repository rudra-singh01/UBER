// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSianup = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [storeUserData, setStoreUserData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStoreUserData({
     fullname:{
      firstname,
      lastname,
     },
      email,
      password,
    })
    console.log(storeUserData);
    
    setFirstname("")
    setLastname("")
    setEmail("")
    setPassword("")
    
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div className="">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
          <img
            className="w-14 mb-2"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
          <h2 className="text-base font-bold">Enter Captain Name</h2>
          <div className="flex items-center justify-between gap-2">
            <input
              className="px-4 py-3 bg-[#eeeeee] rounded-md w-1/2 border placeholder:text-sm"
              placeholder="first name"
              required
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="px-4 py-3 bg-[#eeeeee] rounded-md w-1/2 border placeholder:text-sm"
              placeholder="last name"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <h2 className="text-base font-bold">{"what's"} your email</h2>
          <input
            className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
            placeholder="example@gmail.com"
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2 className="text-base font-bold">Enter password</h2>
          <input
            className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
            placeholder="1234abc"
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="px-4 py-3 bg-[#111] text-[#fff] rounded-md w-full border font-semibold capitalize">
            create account
          </button>
          <p className="tracking-tighter ">
            Already Have a Account?{" "}
            <Link to="/captainlogin" className="text-lg text-blue-600">
              Login Here
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="">
        <p className="text-[10px] leading-tight font-medium">
          Thsi site is procted by reCAPTCHA and the <span className="underline">Google privicy policy</span> . policy and  <span className="underline">term of service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSianup;
