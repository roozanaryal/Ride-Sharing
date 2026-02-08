import CaptainBottomPannel from "@/components/CaptainBottomPannel";
import LogoHeader from "@/components/LogoHeader";
import MapBackground from "@/components/MapBackground";
// import { useState } from "react";

const page = () => {
    
//   const [showAccpetRidePanel, setShowAcceptRidePannel] =
//     useState<boolean>(false);

  return (
    <div className="h-screen relative w-screen overflow-hidden bg-gray-100">
      <MapBackground />
      <LogoHeader />

      <CaptainBottomPannel />
    

    </div>
  );
};

export default page;
