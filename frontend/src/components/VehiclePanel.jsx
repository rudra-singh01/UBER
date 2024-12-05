// import React from 'react';
import { ChevronDown } from 'lucide-react';
import { User } from 'lucide-react';

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setVehiclePanel(false)
        }} className="absolute top-5 right-6"><ChevronDown/></h5>
        <h3 className="text-xl mb-5 font-bold capitalize">choose a ride</h3>
        
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }} className="flex border-2 active:border-black bg-[#dadada] p-3 mb-2 rounded-xl items-center w-full justify-between gap-4">
          {/* Car Image */}
          <img
            className="h-14 object-contain"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt="Uber Logo"
          />

          {/* Ride Details */}
          <div className="w-1/2">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              Auto
              <span className="text-sm text-gray-600 flex items-center gap-1">
                <User size={20} />4
              </span>
            </h4>
            <h5 className="text-sm text-gray-500">2 min away</h5>
            <p className="text-sm text-gray-600">Affordable, car ride</p>
          </div>

          {/* Price */}
          <h2 className="text-xl font-bold text-gray-900">₹192</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }} className="flex border-2 active:border-black bg-[#dadada] p-3 mb-2 rounded-xl items-center w-full justify-between gap-4">
          {/* Car Image */}
          <img
            className="h-14 object-contain"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="Uber Logo"
          />

          {/* Ride Details */}
          <div className="w-1/2">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              Auto
              <span className="text-sm text-gray-600 flex items-center gap-1">
                <User size={20} />3
              </span>
            </h4>
            <h5 className="text-sm text-gray-500">2 min away</h5>
            <p className="text-sm text-gray-600">Affordable, Auto ride</p>
          </div>

          {/* Price */}
          <h2 className="text-xl font-bold text-gray-900">₹192</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }} className="flex border-2 active:border-black bg-[#dadada] p-3 mb-2 rounded-xl items-center w-full justify-between gap-4">
          {/* Car Image */}
          <img
            className="h-14 object-contain"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="Uber Logo"
          />

          {/* Ride Details */}
          <div className="w-1/2">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              Moto
              <span className="text-sm text-gray-600 flex items-center gap-1">
                <User size={20} />1
              </span>
            </h4>
            <h5 className="text-sm text-gray-500">3 min away</h5>
            <p className="text-sm text-gray-600">Affordable, motorcycle ride</p>
          </div>

          {/* Price */}
          <h2 className="text-xl font-bold text-gray-900">₹70</h2>
        </div>
    </div>
  )
}

export default VehiclePanel