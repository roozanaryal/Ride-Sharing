"use client";
import CaptainBottomPannel from "@/components/CaptainBottomPannel";
import LogoHeader from "@/components/LogoHeader";
import MapBackground from "@/components/MapBackground";
import { useState } from "react";

const CaptainPage = () => {
  const [showAcceptRidePanel, setShowAcceptRidePanel] = useState<boolean>(true);

  return (
    <div className="h-screen relative w-screen overflow-hidden bg-gray-100">
      <MapBackground />
      <LogoHeader />
      {showAcceptRidePanel ? (
        <CaptainBottomPannel
          isOpen={showAcceptRidePanel}
          onClose={() => setShowAcceptRidePanel(false)}
        />
      ) : (
        <div className="text-center ...">Today&apos;s Earning : Rs 5000</div>
      )}
    </div>
  );
};

export default CaptainPage;
