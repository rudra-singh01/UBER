// import React from 'react'
import {
  ChevronDown,
  HandCoinsIcon,
  MapPinCheck,
  MapPinHouse,
} from "lucide-react";

const WaitingForDriver = () => {
  return (
    <div>
      <h5
        // onClick={() => {
        //   props.setVehicleFound(false);
        // }}
        className="absolute top-4  right-6"
      >
        <ChevronDown />
      </h5>
     <div className="flex items-center justify-between mt-10">

        <img
          className="h-16"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="text-right">
            <h2 className="text-xl font-medium">driver</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">IN DL 3777</h4>
            <p className="text-sm text-gray-600">swift</p>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
