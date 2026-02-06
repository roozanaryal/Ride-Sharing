export interface SignupData {
  fullname: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
}

export interface SignupResponse {
  user: {
    _id: string;
    fullname: {
      firstName: string;
      lastName: string;
    };
    email: string;
  };
  token: string;
}
