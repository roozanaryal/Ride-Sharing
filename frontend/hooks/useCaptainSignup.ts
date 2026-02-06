import apiClient from "@/api/apiClient";
import { SignupCaptainData, SignupCaptainResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";

const captainSignup = async (
  data: SignupCaptainData,
): Promise<SignupCaptainResponse> => {
  const response = await apiClient.post<SignupCaptainResponse>(
    "captain/register",
    data,
  );
  return response.data;
};

export const useCaptainSignup = () => {
  return useMutation({
    mutationFn: captainSignup,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
};
