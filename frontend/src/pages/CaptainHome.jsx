// import React from 'react'
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import CpatianDetails from "../components/CpatianDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
const CaptainHome = () => {
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confrimRidePopUpPanel, setConfrimRidePopUpPanel] = useState(false);

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);
  useGSAP(() => {
    if (confrimRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confrimRidePopUpPanel]);

  return (
    <div className="h-screen flex flex-col bg-white relative">
      {/* Home Icon on Top Left */}
      <div className="fixed flex items-center justify-between p-3 z-10 w-screen">
        <img
          className="w-16"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <Link
          to="/home"
          className="w-10 h-10 bg-white flex items-center justify-center z-20 rounded-full cursor-pointer"
        >
          <LogOut size={24} className="text-gray-900 font-semibold" />
        </Link>
      </div>

      {/* Upper Section with Image */}
      <div className="h-3/5 relative">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Lower Section */}
      <div className="h-2/5 bg-white rounded-t-3xl p-4">
        <CpatianDetails />
      </div>

      <div
        ref={ridePopUpPanelRef}
        className="fixed z-10 bottom-0 translate-y-full w-full p-3  bg-white "
      >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfrimRidePopUpPanel={setConfrimRidePopUpPanel}/>
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed z-10 bottom-0 translate-y-full w-full p-3  bg-white "
      >
        <ConfirmRidePopUp
          setConfrimRidePopUpPanel={setConfrimRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
