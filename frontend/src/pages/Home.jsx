import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import LocationSearchpanel from "../components/LocationSearchpanel";
// import { User } from "lucide-react";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel , setVehiclePanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[vehiclePanel])
  
  useGSAP(()=>{
    if(confirmedRidePanel){
      gsap.to(confirmedRideRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(confirmedRideRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[confirmedRidePanel])
  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[waitingForDriver])

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[vehicleFound])

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      <div onClick={()=>{
        setVehiclePanel(false)
      }} className="w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>

      <div className="h-screen absolute top-10 w-full flex flex-col justify-end">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-4 right-6 text-xl"
          >
            <ChevronDown />
          </h5>
          <h4 className="text-2xl font-semibold capitalize">Find a trip</h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 rounded-lg w-full"
              type="text"
              placeholder="Enter your location"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 opacity-0 bg-white p-5 ">
          <LocationSearchpanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 w-full p-3 translate-y-full bg-white ">
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmedRideRef} className="fixed z-10 bottom-0 w-full p-3 translate-y-full bg-white ">
        <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 w-full p-3 translate-y-full bg-white ">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef}  className="fixed z-10 bottom-0 translate-y-full w-full p-3  bg-white ">
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
