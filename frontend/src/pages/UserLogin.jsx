// import React from 'react'

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const {user , setUser} = useContext(UserDataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userData=({
      email,
      password
    })

    const responce = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if(responce.status === 200){
      const data = responce.data;
      setUser(data.user)
      localStorage.setItem('token',data.token)
      
      navigate('/home')
    }

    setEmail("")
    setPassword("")

  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div className="">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-7">
          <img
            className="w-14"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <h2 className="text-lg font-bold">{"what's"} your email <span className="text-red-500">*</span></h2>
          <input
            className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
            placeholder="example@gmail.com"
            type="email"
            name="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
          />
          <h2 className="text-lg font-bold">{"what's"} your password <span className="text-red-500">*</span></h2>
          <input
            className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
            placeholder="1234abc"
            type="password"
            name="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
          <button className="px-4 py-3 bg-[#111] text-[#fff] rounded-md w-full border font-semibold capitalize">
            login
          </button>
          <p>New Here? <Link to="/signup" className="text-lg text-blue-600">create a new account</Link> </p>
        </form>
      </div>
      <div className="">
        <Link to='/captainlogin' className="flex items-center justify-center px-4 py-3 bg-[#10b461] text-[#fff] rounded-md w-full border font-semibold capitalize">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
