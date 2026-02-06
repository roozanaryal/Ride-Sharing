import apiClient from "@/api/apiClient";
import { LoginData, SignupCaptainResponse, ApiError } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const loginCaptain = async (
  data: LoginData,
): Promise<SignupCaptainResponse> => {
  const response = await apiClient.post<SignupCaptainResponse>(
    "/captain/login",
    data,
  );
  return response.data;
};

export const useCaptainLogin = () => {
  const router = useRouter();
  return useMutation<SignupCaptainResponse, AxiosError<ApiError>, LoginData>({
    mutationFn: loginCaptain,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      router.push("/");
    },
    onError: (error) => {
      console.error("Captain Login Error:", error);
    },
  });
};
