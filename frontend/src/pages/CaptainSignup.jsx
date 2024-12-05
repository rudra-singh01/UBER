// import React from 'react'

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicelType: vehicleType,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-7 flex flex-col justify-between min-h-screen">
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
          <h2 className="text-base font-bold">Vehicle Information</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
                placeholder="Vehicle Color"
                type="text"
                name="vehicleColor"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
                placeholder="Plate Number"
                type="text"
                name="vehiclePlate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <input
                className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base"
                placeholder="Vehicle Capacity"
                type="text"
                name="vehicleCapacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
              <select
                className="px-4 py-3 bg-[#eeeeee] rounded-md w-full border placeholder:text-base transition-all duration-300 ease-in-out"
                name="vehicleType"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="">Vehicle Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

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
        <p className="text-[10px] pt-28 leading-tight font-medium">
          Thsi site is procted by reCAPTCHA and the{" "}
          <span className="underline">Google privicy policy</span> . policy and{" "}
          <span className="underline">term of service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
