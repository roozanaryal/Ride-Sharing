import { useMutation } from "@tanstack/react-query";
import apiClient from "../api/apiClient";
import { SignupData, SignupResponse } from "../types/auth";
import { useRouter } from "next/navigation";

const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  const response = await apiClient.post<SignupResponse>("/auth/register", data);
  return response.data;
};

export const useUserSignup = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      console.log("Signup successful:", data);
      router.push("/");
    },
    onError: (error) => {
      console.error("Signup error:", error);
    },
  });
};
