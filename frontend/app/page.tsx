"use client";

import BottomPannel1 from "@/components/BottomPannel1";
import MapBackground from "@/components/MapBackground";
import LogoHeader from "@/components/LogoHeader";
import ChooseVehicle, { VehicleOption } from "@/components/ChooseVehicle";
import ConfirmRide from "@/components/ConfirmRide";
import { useState } from "react";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [showVehiclePanel, setShowVehiclePanel] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleOption | null>(null);

  const handleVehicleSelect = (vehicle: VehicleOption) => {
    setSelectedVehicle(vehicle);
    setShowVehiclePanel(false);
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gray-100">
      <MapBackground />
      <LogoHeader />

      {!showVehiclePanel && !selectedVehicle && (
        <BottomPannel1
          pickup={pickup}
          setPickup={setPickup}
          destination={destination}
          setDestination={setDestination}
          onFindTrip={() => setShowVehiclePanel(true)}
        />
      )}

      {showVehiclePanel && !selectedVehicle && (
        <ChooseVehicle
          onVehicleSelect={handleVehicleSelect}
          onBack={() => setShowVehiclePanel(false)}
          setChooseVehicle={setShowVehiclePanel}
        />
      )}

      {selectedVehicle && (
        <ConfirmRide
          vehicle={selectedVehicle}
          onConfirm={() => {
            console.log("Ride Confirmed!");
            // You can add logic here to start the ride
          }}
          onBack={() => {
            setSelectedVehicle(null);
            setShowVehiclePanel(true);
          }}
        />
      )}
    </div>
  );
}

