// import React from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronUp, LogOut } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Home Icon on Top Left */}
      <div className="fixed flex items-center justify-between p-3 z-10 w-screen">
        <img
          className="w-16"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <Link
          to="/captain-home"
          className="w-10 h-10 bg-white flex items-center justify-center z-20 rounded-full cursor-pointer"
        >
          <LogOut size={24} />
        </Link>
      </div>

      {/* Upper Section with Image */}
      <div className="h-4/5 relative">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Lower Section */}
      <div
        onClick={() => {
          setFinishRidePanel(true);
        }}
        className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative"
      >
        <h5 className="absolute text-center w-[90%] top-0 left-[45%] p-2">
          <ChevronUp />
        </h5>
        <h4 className="text-xl font-semibold">4KM away</h4>
        <button className=" bg-green-600 text-white font-bold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 translate-y-full w-full p-3  bg-white "
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
