interface captainProps {
  onClose: () => void;
  isOpen: boolean;
}

const CaptainBottomPannel = ({ onClose, isOpen }: captainProps) => {
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 w-full h-[50%] lg:h-[35%] bg-white shadow-2xl px-6 py-5 z-50 
        transition-transform duration-500 ease-in-out transform 
        ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
          onClick={onClose}
        >
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

          <button
            className="w-full py-3 bg-green-500 hover:bg-green-600 transition-all text-white font-semibold rounded-2xl shadow-md"
            // onClick={setRideAcceptance(true)}
          >
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
    </>
  );
};

export default CaptainBottomPannel;
