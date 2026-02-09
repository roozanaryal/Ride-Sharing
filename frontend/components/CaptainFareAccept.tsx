interface captainPro {
  onClose: () => void;
}
const CaptainFareAccept = ({ onClose }: captainPro) => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] px-6 pt-2 pb-8 z-50 
      transition-transform duration-500 ease-in-out transform"
    >
      {/* Pull Handle */}
      <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto my-4"
      onClick={onClose}
      ></div>

      <div className="space-y-6">
        {/* Header Info: Distance and Time */}
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              You will Reach In
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">10 min</h2>
          </div>
          <div className="bg-green-50 text-green-600 px-4 py-2 rounded-2xl flex items-center gap-2 border border-green-100 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-black uppercase tracking-tight">
              1km Away
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-100"></div>

        {/* Passenger Profile Segment */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-green-400 to-blue-500 rounded-4xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center justify-between bg-white border border-gray-100 p-5 rounded-4xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-white shadow-inner">
                  {/* Placeholder for Profile Picture */}
                  <span className="text-2xl font-bold text-gray-300">R</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-xl text-gray-800">
                  Rojan Aryal
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-sm font-bold text-gray-500">
                    Passenger
                  </span>
                </div>
              </div>
            </div>

            {/* Message Button */}
            <button className="w-14 h-14 bg-gray-900 text-white rounded-[1.2rem] flex items-center justify-center hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-gray-50 p-4 rounded-3xl border border-gray-100">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 rounded-full bg-red-500"></div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Drop Location
              </p>
              <p className="font-bold text-gray-800">Gongabu, Kathmandu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainFareAccept;
