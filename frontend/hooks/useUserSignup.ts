import { useMutation } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { SignupData, SignupResponse } from '../types/auth';

const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  const response = await apiClient.post<SignupResponse>('/auth/register', data);
  return response.data;
};

export const useUserSignup = () => {
  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      // Logic after successful signup (e.g., save token to local storage, etc.)
      localStorage.setItem('token', data.token);
      console.log('Signup successful:', data);
    },
    onError: (error) => {
      console.error('Signup error:', error);
    },
  });
};
 