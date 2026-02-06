"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUserLogin } from "@/hooks/useUserLogin";
import { useCaptainLogin } from "@/hooks/useCaptainLogin";
import { AxiosError } from "axios";
import { ApiError } from "@/types/auth";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<"user" | "rider">("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    mutate: loginUser,
    isPending: isUserPending,
    isError: isUserError,
    error: userError,
  } = useUserLogin();
  const {
    mutate: loginCaptain,
    isPending: isCaptainPending,
    isError: isCaptainError,
    error: captainError,
  } = useCaptainLogin();

  const isError = isUserError || isCaptainError;
  const isPending = isUserPending || isCaptainPending;
  const error = userError || captainError;

  const getErrorMessage = (err: AxiosError<ApiError> | null) => {
    if (!err) return "Authentication failed";

    // Check for express-validator errors
    if (err.response?.data?.errors && err.response.data.errors.length > 0) {
      return err.response.data.errors[0].msg;
    }

    // Check for message field
    return (
      err.response?.data?.message || err.message || "Authentication failed"
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userType == "user") {
      loginUser({ email: formData.email, password: formData.password });
    } else {
      loginCaptain({ email: formData.email, password: formData.password });
    }
    router.push("/");
  };

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

            {/* Error Message */}
            {isError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                <p className="text-red-500 text-xs font-medium">
                  {getErrorMessage(error)}
                </p>
              </div>
            )}

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  name="password"
                  value={formData.password}
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-neutral-600 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-neutral-950 font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] mt-2 shadow-lg shadow-amber-500/20 text-sm flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-neutral-950/20 border-t-neutral-950 rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>
                    Sign In as {userType === "user" ? "Passenger" : "Captain"}
                  </span>
                )}
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
