// import React from 'react'

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Captainlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
    };
    

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2 className="text-lg font-bold">{"what's"} your password</h2>
          <input
            className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
            placeholder="1234abc"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="px-4 py-3 bg-[#111] text-[#fff] rounded-md w-full border font-semibold capitalize">
            login
          </button>
          <p>
            join a feet?
            <Link to="/captainsignup" className="text-lg text-blue-600">
              Register as a captain
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="">
        <Link
          to="/login"
          className="flex items-center justify-center px-4 py-3 bg-[#d6522d] text-[#fff] rounded-md w-full border font-semibold capitalize"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
