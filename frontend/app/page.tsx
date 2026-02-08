"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { id: 1, name: "Vikas Nagar, Sector 10, Lucknow", icon: "📍" },
    { id: 2, name: "Indira Nagar, Phase 2, Near Kalyan Mandap", icon: "📍" },
    { id: 3, name: "Hazratganj Metro Station, Exit 2", icon: "📍" },
    { id: 4, name: "Chaudhary Charan Singh International Airport", icon: "✈️" },
    { id: 5, name: "Phoenix Palassio Mall, Amar Shaheed Path", icon: "🛍️" },
  ];

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gray-100">
      {/* Background Section/Map */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop"
          className="h-full w-full object-cover grayscale-[20%]"
          alt="Map background"
          width={}
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Logo Header */}
      <div className="absolute top-8 left-8 z-10">
        <h1 className="text-3xl font-black tracking-tighter text-black flex items-center gap-2">
          <span className="bg-white px-2 py-1 rounded-lg shadow-sm">RIDE</span>
          <span className="text-white drop-shadow-md">SHARING</span>
        </h1>
      </div>

      {/* Bottom Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] shadow-[0_-8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-20 ${
          isPanelOpen ? "h-[85%]" : "h-auto pb-8 pt-6"
        }`}
      >
        <div className="max-w-xl mx-auto px-6">
          {/* Panel Header */}
          <div className="flex justify-between items-center mb-6">
            <h3
              className={`text-2xl font-bold text-gray-900 transition-opacity duration-300 ${isPanelOpen ? "opacity-100" : "opacity-100"}`}
            >
              {isPanelOpen ? "Plan your trip" : "Find a trip"}
            </h3>
            {isPanelOpen && (
              <button
                onClick={() => setIsPanelOpen(false)}
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
                  className="text-gray-500"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            )}
          </div>

          {/* Input Section */}
          <div className="relative space-y-3">
            {/* Visual connector line between inputs when open */}
            {isPanelOpen && (
              <div className="absolute left-[1.35rem] top-10 bottom-10 w-0.5 bg-gray-200 z-10"></div>
            )}

            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-gray-400 group-focus-within:border-black z-20"></div>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                onFocus={() => setIsPanelOpen(true)}
                placeholder="Add a pickup location"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-2xl outline-none transition-all text-gray-800 font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="relative group">
              <div className="absolute left-[0.9rem] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 group-focus-within:bg-black rounded-sm z-20"></div>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onFocus={() => setIsPanelOpen(true)}
                placeholder="Enter your destination"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white rounded-2xl outline-none transition-all text-gray-800 font-medium placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Suggestions List (Visible only when panel is open) */}
          <div
            className={`mt-8 space-y-2 transition-all duration-500 overflow-hidden ${
              isPanelOpen
                ? "opacity-100 translate-y-0 max-h-[500px]"
                : "opacity-0 translate-y-4 max-h-0"
            }`}
          >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-2 mb-4">
              Recent Destinations
            </p>
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => {
                  if (!pickup) setPickup(suggestion.name);
                  else setDestination(suggestion.name);
                }}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 rounded-2xl transition-colors text-left group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors shrink-0">
                  <span className="text-lg">{suggestion.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">
                    {suggestion.name.split(",")[0]}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {suggestion.name.split(",").slice(1).join(",")}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
