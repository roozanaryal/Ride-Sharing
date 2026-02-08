
export interface VehicleOption {
  id: string;
  type: "Car" | "Bike" | "Auto";
  name: string;
  price: number;
  time: string;
  description: string;
  image: string;
}

const vehicles: VehicleOption[] = [
  {
    id: "1",
    type: "Car",
    name: "SwiftRide Go",
    price: 193.2,
    time: "2 min away",
    description: "Affordable, compact rides",
    image: "https://imgs.search.brave.com/Zmk2evFFW-Y5pP19voISE8eVotPYDJAq6XXk425ssFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnViZXItY2RuLmNv/bS9jZG4tY2dpL2lt/YWdlL3dpZHRoPTIx/NjAscXVhbGl0eT04/MCxvbmVycm9yPXJl/ZGlyZWN0LGZvcm1h/dD1hdXRvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA2L3Ry/b2ptaWFzdG8ucG5n",
  },
  {
    id: "2",
    type: "Bike",
    name: "Moto",
    price: 64.4,
    time: "3 min away",
    description: "Quick and affordable",
    image: "https://imgs.search.brave.com/i_yN6aJbe_LgkDKO3P8oj9oe-R-qz-67MY-gGQn1X_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8yNS81LzIw/L3JvYWQtY3ljbGlu/Zy1jeWNsaXN0LXJp/ZGluZy1iaWtlLWls/bHVzdHJhdGlvbi1u/TnRTNTVKWV90Lmpw/Zw",
  },
  {
    id: "3",
    type: "Bike",
    name: "Scooter",
    price: 45.0,
    time: "1 min away",
    description: "Eco-friendly short rides",
    image: "https://imgs.search.brave.com/6-w4q-bOjJ2dZSfUyqBYgw4pEvFuSg1d90T9c8X0JYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/NTYzLzg4MC9zbWFs/bC9zZXJlbmUtY2xh/c3NpYy1lbGVjdHJp/Yy1zY29vdGVyLWlu/LWNpdHktc3RyZWV0/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/cHJvZmVzc2lvbmFs/LXBuZy5wbmc",
  },
];

interface ChooseVehicleProps {
  onVehicleSelect: (vehicle: VehicleOption) => void;
  onBack: () => void;
  setChooseVehicle: (value: boolean) => void;
}

const ChooseVehicle = ({ onVehicleSelect, onBack, setChooseVehicle }: ChooseVehicleProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] shadow-[0_-8px_30px_rgb(0,0,0,0.12)] z-30 animate-in slide-in-from-bottom duration-500 ease-out">
      <div className="max-w-xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
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
            Choose a ride
          </h3>
          <div className="w-10"></div> {/* Spacer for symmetry */}
        </div>

        {/* Vehicle List */}
        <div className="space-y-3 mb-8">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => onVehicleSelect(vehicle)}
              className="w-full flex items-center justify-between p-4 border-2 border-transparent hover:border-black active:bg-gray-50 rounded-2xl transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 flex items-center justify-center">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900">{vehicle.name}</p>
                    <span className="flex items-center text-[10px] bg-gray-100 px-2 py-0.5 rounded-full font-bold uppercase text-gray-500">
                      {vehicle.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    {vehicle.description}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-gray-900">
                  ₹{vehicle.price.toFixed(2)}
                </p>
              </div>
            </button>
          ))}
        </div>


      </div>
    </div>
  );
};

export default ChooseVehicle;
