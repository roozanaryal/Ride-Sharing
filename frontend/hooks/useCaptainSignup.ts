import apiClient from "@/api/apiClient";
import { SignupCaptainData, SignupCaptainResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

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
  const { setUser } = useUser();

  return useMutation({
    mutationFn: captainSignup,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      setUser(data.captain);
      router.push("/");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
};
