// import React from 'react'

import {
  ChevronDown,
  HandCoinsIcon,
  MapPinCheck,
  MapPinHouse,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [Otp , setOtp] = useState("")
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen z-30 pt-10">
      <h5
        onClick={() => {
          props.setConfrimRidePopUpPanel(false);
        }}
        className="absolute top-13 right-6"
      >
        <ChevronDown />
      </h5>
      <h3 className="text-xl mb-5 font-bold capitalize">Confrirm The Ride</h3>
      <div className="flex items-center justify-between  bg-yellow-400 rounded-lg p-3">
        <div className="flex items-center justify-start gap-5">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1707396172424-f3293f788364?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h2 className="text-lg font-semibold">harsk</h2>
        </div>
        <h2 className="text-lg font-semibold">2.2km</h2>
      </div>

      <div className="flex justify-between items-center flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <div className=" flex items-center p-3  gap-5 border-b-2 ">
            <MapPinHouse size={34} />
            <div className="">
              <h3 className="text-xl font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">kankariya talab,ahemdabad</p>
            </div>
          </div>
          <div className=" flex items-center p-3  gap-5 border-b-2 ">
            <MapPinCheck size={34} />
            <div className="">
              <h3 className="text-xl font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">kankariya talab,ahemdabad</p>
            </div>
          </div>
          <div className=" flex items-center p-3  gap-5 border-b-2 ">
            <HandCoinsIcon size={34} />
            <div className="">
              <h3 className="text-xl font-medium">₹193</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
            className="flex flex-col items-center justify-between gap-3 mt-5"
          >
            <input
              type="text"
              placeholder="Enter the OTP"
              className="bg-[#eee] px-6 py-4 font-mono   rounded-lg w-full"
              value={Otp}
              onChange={e=>setOtp(e.target.value)  }
            />

            <div className="flex w-full items-center justify-between gap-5 pt-3">
              <button
                onClick={() => {
                  props.setConfrimRidePopUpPanel(false);
                  props.setRidePopUpPanel(false);
                }}
                className="w-full  bg-gray-300 text-gray-800 font-bold p-2 rounded-lg"
              >
                Reject
              </button>
              <Link
                to="/captain-riding"
                className="w-full flex items-center justify-center  bg-green-600 text-white font-bold p-2 rounded-lg"
              >
                confirm
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
