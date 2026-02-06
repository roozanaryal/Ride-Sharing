import apiClient from "@/api/apiClient";
import { LoginData, LoginResponse, ApiError } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("auth/login", data);
  return response.data;
};

export const useUserLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiError>, LoginData>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      console.log("Login Success", data);
    },
    onError: (error) => {
      console.error("Login Error", error);
    },
  });
};
