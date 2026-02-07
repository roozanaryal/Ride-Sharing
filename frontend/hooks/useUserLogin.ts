import apiClient from "@/api/apiClient";
import { LoginData, LoginResponse, ApiError } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("auth/login", data);
  return response.data;
};

export const useUserLogin = () => {
  const router = useRouter();
  const { setUser } = useUser();

  return useMutation<LoginResponse, AxiosError<ApiError>, LoginData>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // save token
      localStorage.setItem("token", data.token);
      
      // update context
      setUser(data.user);

      console.log("Login Success", data);
      router.push("/");
    },
    onError: (error) => {
      console.error("Login Error", error);
    },
  });
};
