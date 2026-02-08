const CaptainBottomPannel = () => {
  return (
    <>
      <div className="absolute bottom-0 w-full h-[50%] lg:h-[35%] bg-white shadow-2xl px-6 py-5">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold">
          ✕
        </button>

        {/* Ride Info */}
        <div className="space-y-4 text-gray-800">
          <div>
            <p className="text-sm text-gray-500">Pickup Location</p>
            <h3 className="text-lg font-semibold">Nepaltar</h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Drop Location</p>
            <h3 className="text-lg font-semibold">Gongabu</h3>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl">
            <span className="text-sm text-gray-600">Fare</span>
            <strong className="text-lg text-green-600">Rs 200</strong>
          </div>

          <button className="w-full py-3 bg-green-500 hover:bg-green-600 transition-all text-white font-semibold rounded-2xl shadow-md">
            Accept Ride
          </button>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 my-5"></div>

        {/* Passenger Info */}
        <div>
          <p className="text-sm text-gray-500 mb-1">Passenger Detail</p>
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-xl">
            <span className="font-medium text-gray-800">Rojan</span>
            <span className="text-sm text-gray-500">Passenger</span>
          </div>
        </div>
      </div>
      {/* 
      <div className="text-center text-gray-700 font-semibold absolute bottom-0 bg-white px-5 py-6 w-full h-[10%]">
        Today&apos;s Earning : Rs 5000
      </div> */}
    </>
  );
};

export default CaptainBottomPannel;
