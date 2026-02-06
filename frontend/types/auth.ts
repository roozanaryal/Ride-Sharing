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

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
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
