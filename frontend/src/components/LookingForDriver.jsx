// import React from 'react'
import {
  ChevronDown,
  HandCoinsIcon,
  MapPinCheck,
  MapPinHouse,
} from "lucide-react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="absolute top-5 right-6"
      >
        <ChevronDown />
      </h5>
      <h3 className="text-xl mb-5 font-bold capitalize">
        Looking for a driver
      </h3>

      <div className="flex justify-between items-center flex-col gap-2">
        <img
          className="h-32"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
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
      </div>
    </div>
  );
};

export default LookingForDriver;
