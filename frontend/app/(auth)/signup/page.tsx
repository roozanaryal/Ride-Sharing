"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUserSignup } from "@/hooks/useUserSignup";
import { useCaptainSignup } from "@/hooks/useCaptainSignup";

const SignupPage = () => {
  const [userType, setUserType] = useState<"user" | "rider">("user");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    vehicleType: "bike",
    plate: "",
    colour: "",
  });

  const {
    mutate: signupUser,
    isPending: isUserPending,
    isError: isUserError,
    error: userError,
  } = useUserSignup();
  const {
    mutate: signupCaptain,
    isPending: isCaptainPending,
    isError: isCaptainError,
    error: captainError,
  } = useCaptainSignup();

  const isPending = isUserPending || isCaptainPending;
  const isError = isUserError || isCaptainError;
  const error = userError || captainError;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // To address your concern: explicitly creating the nested fullname object
    const fullname = {
      firstName: formData.firstName,
      lastName: formData.lastName,
    };

    if (userType === "user") {
      signupUser({
        fullname,
        email: formData.email,
        password: formData.password,
      });
    } else {
      signupCaptain({
        fullname,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        vehicle: {
          plate: formData.plate,
          colour: formData.colour,
          vehicleType: formData.vehicleType,
        },
      });
    }
  };

  return (
    <div className="h-screen bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-2xl z-10 max-h-full flex flex-col">
        <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
          {/* Header - Fixed */}
          <div className="pt-6 pb-2 px-8 text-center text-white shrink-0">
            <h1 className="text-3xl font-black tracking-tighter mb-1">
              Swift<span className="text-amber-500">Ride</span>
            </h1>
            <p className="text-neutral-400 text-xs">
              Join our platform. Sign up as a passenger or a captain.
            </p>
          </div>

          {/* User Type Toggle - Fixed/Top of scroll */}
          <div className="px-8 py-4 w-full max-w-md mx-auto fshrink-0">
            <div className="flex p-1 bg-neutral-800 rounded-2xl relative">
              <button
                type="button"
                onClick={() => setUserType("user")}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 z-10 ${
                  userType === "user" ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                Passenger
              </button>
              <button
                type="button"
                onClick={() => setUserType("rider")}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 z-10 ${
                  userType === "rider" ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                Captain
              </button>
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-amber-500 rounded-xl transition-transform duration-300 ease-out ${
                  userType === "user" ? "translate-x-0" : "translate-x-full"
                }`}
              ></div>
            </div>
          </div>

          {/* Scrollable Form Area */}
          <div className="overflow-y-auto custom-scrollbar px-8 pb-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Common Fields */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                    className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                  />
                </div>

                {/* Rider Only Fields */}
                {userType === "rider" && (
                  <>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+1 234 567 890"
                        required
                        className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                        Vehicle Type
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-sm appearance-none"
                      >
                        <option value="bike">Bike</option>
                        <option value="car">Car</option>
                        <option value="scooter">Scooter</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                        Number Plate
                      </label>
                      <input
                        type="text"
                        name="plate"
                        value={formData.plate}
                        onChange={handleInputChange}
                        placeholder="ABC-1234"
                        required
                        className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                        Vehicle Colour
                      </label>
                      <input
                        type="text"
                        name="colour"
                        value={formData.colour}
                        onChange={handleInputChange}
                        placeholder="Black"
                        required
                        className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                      />
                    </div>
                  </>
                )}

                <div className="space-y-1 md:col-span-2">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    required
                    className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                  />
                </div>
              </div>

              {isError && (
                <div className="text-red-500 text-[10px] mt-1 space-y-1">
                  {(error as any)?.response?.data?.message && (
                    <p>{(error as any).response.data.message}</p>
                  )}
                  {(error as any)?.response?.data?.errors?.map(
                    (err: any, index: number) => (
                      <p key={index}>• {err.msg || err.message}</p>
                    ),
                  )}
                  {!(error as any)?.response?.data?.message &&
                    !(error as any)?.response?.data?.errors && (
                      <p>Something went wrong. Please try again.</p>
                    )}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] mt-2 shadow-lg shadow-amber-500/20 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending
                  ? "Creating Account..."
                  : `Create ${userType === "user" ? "Passenger" : "Captain"} Account`}
              </button>
            </form>
          </div>

          {/* Footer - Fixed */}
          <div className="bg-neutral-800/50 py-4 px-8 text-center border-t border-white/5 shrink-0">
            <p className="text-neutral-400 text-xs">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-amber-500 hover:text-amber-400 font-bold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #525252;
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
