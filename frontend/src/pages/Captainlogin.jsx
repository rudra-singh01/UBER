// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [captainData, setCaptainData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email, password })   
    setEmail("")
    setPassword("")

  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div className="">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-7">
          <img
            className="w-14"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
          <h2 className="text-lg font-bold">{"what's"} your email</h2>
          <input
            className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
            placeholder="example@gmail.com"
            type="email"
            name="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <h2 className="text-lg font-bold">{"what's"} your password</h2>
          <input
            className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
            placeholder="1234abc"
            type="password"
            name="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <button  className="px-4 py-3 bg-[#111] text-[#fff] rounded-md w-full border font-semibold capitalize">
            login
          </button>
          <p>join a feet?<Link to="/captainsignup" className="text-lg text-blue-600">Register as a captain</Link> </p>
        </form>
      </div>
      <div className="">
        <Link to='/login' className="flex items-center justify-center px-4 py-3 bg-[#d6522d] text-[#fff] rounded-md w-full border font-semibold capitalize">Sign in as User</Link>
      </div>
    </div>
  );
};

export default Captainlogin