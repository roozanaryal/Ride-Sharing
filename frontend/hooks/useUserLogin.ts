import apiClient from "@/api/apiClient";
import { LoginData, LoginResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("auth/login", data);
  return response.data;
};

export const useUserLogin = () => {
  return useMutation({
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
