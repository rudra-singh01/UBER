// import React from 'react'

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    const responce = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (responce.status === 200) {
      const data = responce.data;
      setUser(data.user);
      localStorage.setItem('token',data.token)
      navigate("/home");
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div className="">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
          <img
            className="w-14 mb-2"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <h2 className="text-base font-bold">{"what's"} your name</h2>
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
            <Link to="/login" className="text-lg text-blue-600">
              Login Here
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="">
        <p className="text-[10px] leading-tight font-medium">
          by processing you consent to get call , whatapp or sms message
          including by automatad means from uber and its affiliates to number
          provided
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
