// import React from 'react'
import { Coins, HandCoinsIcon, MapPinCheck, HomeIcon } from "lucide-react";
import {Link} from "react-router-dom";

const Riding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 relative">
      {/* Home Icon on Top Left */}
      <Link to="/home" className="w-10 h-10 fixed bg-white flex items-center justify-center z-20 rounded-full right-2 top-2 cursor-pointer">
        <HomeIcon size={24} className="text-gray-900 font-semibold" />
      </Link>

      {/* Upper Section with Image */}
      <div className="h-1/2 relative">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Lower Section */}
      <div className="h-1/2 bg-white rounded-t-3xl shadow-lg p-6">
        {/* Driver Information */}
        <div className="flex items-center justify-between mb-6">
          <img
            className="h-16 w-16 object-contain rounded-full shadow-md"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt="Driver"
          />
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800">Driver</h2>
            <h4 className="text-lg font-bold text-gray-700 -mt-1">
              IN DL 3777
            </h4>
            <p className="text-sm text-gray-500">Swift</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="space-y-4">
          {/* Drop-off Location */}
          <div className="flex items-center p-3 bg-gray-50 rounded-md shadow-sm gap-4">
            <MapPinCheck size={32} className="text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">562/11-A</h3>
              <p className="text-sm text-gray-500">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="flex items-center p-3 bg-gray-50 rounded-md shadow-sm gap-4">
            <HandCoinsIcon size={32} className="text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">₹193</h3>
              <p className="text-sm text-gray-500">Cash</p>
            </div>
          </div>

          <button className="mt-6 bg-green-500 w-full text-white font-bold py-2 px-4 rounded flex items-center justify-center">
            <Coins size={24} className="mr-2" /> Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
