import apiClient from "@/api/apiClient";
import { SignupCaptainData, SignupCaptainResponse } from "@/types/auth";

const signupCaptain = async (
  data: SignupCaptainData,
): Promise<SignupCaptainResponse> => {
  const response = await apiClient.post<SignupCaptainResponse>(
    "/captain/register",
    data,
  );
  return response.data;
};

