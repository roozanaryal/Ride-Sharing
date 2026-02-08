import React from "react";
import { VehicleOption } from "./ChooseVehicle";

interface ConfirmRideProps {
  vehicle: VehicleOption;
  onConfirm: () => void;
  onBack: () => void;
}

const ConfirmRide = ({ vehicle, onConfirm, onBack }: ConfirmRideProps) => {
  // Dummy driver data
  const driver = {
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    rating: 4.8,
    trips: 1250,
    vehicle: {
      numberPlate: "UP32 KV 4521",
      color: vehicle.type === "Car" ? "White" : vehicle.type === "Bike" ? "Black" : "Yellow",
      model: vehicle.name
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-4xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] z-40 animate-in slide-in-from-bottom duration-500 ease-out">
      <div className="max-w-xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <h3 className="text-xl font-bold text-gray-900 absolute left-1/2 -translate-x-1/2">
            Confirm your ride
          </h3>
          <div className="w-10"></div>
        </div>

        {/* Vehicle Summary */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-16 flex items-center justify-center">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">{vehicle.name}</p>
              <p className="text-sm text-gray-500 font-medium">₹{vehicle.price.toFixed(2)} • {vehicle.time}</p>
            </div>
          </div>
        </div>

        {/* Driver & Vehicle Details */}
        <div className="space-y-6 mb-8">
          {/* Driver Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center border-2 border-amber-200">
                <span className="text-2xl">👨🏻‍✈️</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{driver.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-bold text-gray-600 flex items-center gap-1">
                    ⭐ {driver.rating}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">• {driver.trips} trips</span>
                </div>
              </div>
            </div>
            <button className="p-3 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </button>
          </div>

          <hr className="border-gray-100" />

          {/* Vehicle Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-2xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Number Plate</p>
              <p className="font-black text-gray-800 tracking-tight">{driver.vehicle.numberPlate}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Vehicle Color</p>
              <p className="font-bold text-gray-800">{driver.vehicle.color}</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <p className="font-semibold text-gray-700">Cash Payment</p>
            </div>
            <p className="font-bold text-gray-900">₹{vehicle.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-black text-white font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all"
          >
            Confirm Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRide;
