import apiClient from "@/api/apiClient";
import { SignupCaptainData, SignupCaptainResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return useMutation({
    mutationFn: captainSignup,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      router.push("/");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
};
