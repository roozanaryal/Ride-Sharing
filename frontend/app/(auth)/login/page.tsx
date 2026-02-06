"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUserLogin } from "@/hooks/useUserLogin";
import { useCaptainLogin } from "@/hooks/useCaptainLogin";

const LoginPage = () => {
  const [userType, setUserType] = useState<"user" | "rider">("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    isPending: isUserPending,
    isError: isUserError,
    error: userError,
  } = useUserLogin();
  const {
    isPending: isCaptainPending,
    isError: isCaptainError,
    error: captainError,
  } = useCaptainLogin();

  const isError = isUserError || isCaptainError;
  const isPending = isCaptainPending || isCaptainPending;
  const error = userError || captainError;

  return (
    <div className="h-screen bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md z-10 max-h-full flex flex-col">
        <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header - Fixed */}
          <div className="pt-6 pb-4 px-8 text-center shrink-0">
            <h1 className="text-3xl font-black text-white tracking-tighter mb-1">
              Swift<span className="text-amber-500">Ride</span>
            </h1>
            <p className="text-neutral-400 text-xs">
              Welcome back! Choose your account type.
            </p>
          </div>

          {/* Scrollable Content Area */}
          <div className="overflow-y-auto custom-scrollbar px-8 pb-4">
            {/* User Type Toggle */}
            <div className="mb-6">
              <div className="flex p-1 bg-neutral-800 rounded-2xl relative">
                <button
                  type="button"
                  onClick={() => setUserType("user")}
                  disabled={isPending}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 z-10 ${
                    userType === "user"
                      ? "text-neutral-900"
                      : "text-neutral-400"
                  }`}
                >
                  User Login
                </button>
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() => setUserType("rider")}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 z-10 ${
                    userType === "rider"
                      ? "text-neutral-900"
                      : "text-neutral-400"
                  }`}
                >
                  Rider Login
                </button>
                <div
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-amber-500 rounded-xl transition-transform duration-300 ease-out ${
                    userType === "user" ? "translate-x-0" : "translate-x-full"
                  }`}
                ></div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-[10px] text-amber-500 hover:text-amber-400 font-semibold uppercase tracking-wider"
                  >
                    Forgot?
                  </button>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                />
              </div>

              <button
                type="button"
                className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] mt-2 shadow-lg shadow-amber-500/20 text-sm"
              >
                Sign In as {userType === "user" ? "Passenger" : "Captain"}
              </button>
            </form>
          </div>

          {/* Footer - Fixed */}
          <div className="bg-neutral-800/50 py-4 px-8 text-center border-t border-white/5 shrink-0">
            <p className="text-neutral-400 text-xs">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-amber-500 hover:text-amber-400 font-bold"
              >
                Create account
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

export default LoginPage;
