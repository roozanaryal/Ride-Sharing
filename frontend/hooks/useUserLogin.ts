import apiClient from "@/api/apiClient";
import { LoginData, LoginResponse, ApiError } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation"; // ✅ use this in App Router

const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("auth/login", data);
  return response.data;
};

export const useUserLogin = () => {
  const router = useRouter();

  return useMutation<LoginResponse, AxiosError<ApiError>, LoginData>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // save token
      localStorage.setItem("token", data.token);

      console.log("Login Success", data);
      router.push("/");
    },
    onError: (error) => {
      console.error("Login Error", error);
    },
  });
};
