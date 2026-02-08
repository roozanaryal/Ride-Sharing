import React from "react";

const LogoHeader = () => {
  return (
    <div className="absolute top-8 left-8 z-10">
      <h1 className="text-3xl font-black tracking-tighter text-black flex items-center gap-2">
        <span className="bg-white px-2 py-1 rounded-lg shadow-sm">RIDE</span>
        <span className="text-white drop-shadow-md">SHARING</span>
      </h1>
    </div>
  );
};

export default LogoHeader;
