"use client";
import CaptainBottomPannel from "@/components/CaptainBottomPannel";
import CaptainFareAccept from "@/components/CaptainFareAccept";
import LogoHeader from "@/components/LogoHeader";
import MapBackground from "@/components/MapBackground";
import { useState } from "react";

const CaptainPage = () => {
  const [showAcceptRidePanel, setShowAcceptRidePanel] = useState<boolean>(false);
  const [rideAcceptedPannel, setRideAcceptancePannel] =
    useState<boolean>(true);
  const [rideAcceptedPullBar, setRideAcceptancedPullBar] =
    useState<boolean>(false);

  return (
    <div className="h-screen relative w-screen overflow-hidden bg-gray-100">
      <MapBackground />
      <LogoHeader />

      {rideAcceptedPullBar && (
        <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 z-50">
          <div className="w-20 lg:w-52 h-1.5 bg-gray-300 rounded-full shadow-sm" onClick={()=>setRideAcceptancePannel(true)}></div>
        </div>
      )}

      {showAcceptRidePanel ? (
        <CaptainBottomPannel
          isOpen={showAcceptRidePanel}
          onClose={() => setShowAcceptRidePanel(false)}
        />
      ) : (
        <>
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 
          bg-white text-black px-6 py-4 
          rounded-2xl shadow-lg 
          w-[90%] max-w-md
          flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">Today&apos;s Earnings</p>
              <p className="text-2xl font-bold text-green-600">Rs 5,000</p>
            </div>

            <div
              className="bg-green-100 text-green-700 
            px-3 py-1 rounded-full text-sm font-semibold"
            >
              + Today
            </div>
          </div>
        </>
      )}
      {rideAcceptedPannel && (
        <>
          <CaptainFareAccept
            onClose={() => {
              setRideAcceptancePannel(false);
              setRideAcceptancedPullBar(true);
            }}
          />
        </>
      )}
    </div>
  );
};

export default CaptainPage;
