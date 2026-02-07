export interface User {
  _id: string;
  fullname: {
    firstName: string;
    lastName?: string;
  };
  email: string;
}

export interface Captain {
  _id: string;
  fullname: {
    firstName: string;
    lastName?: string;
  };
  email: string;
  phoneNumber: string;
  vehicle: {
    plate: string;
    colour: string;
    vehicleType: string;
  };
}

export interface SignupData {
  fullname: {
    firstName: string;
    lastName?: string;
  };
  email: string;
  password: string;
}

export interface SignupResponse {
  user: User;
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface SignupCaptainData {
  fullname: {
    firstName: string;
    lastName?: string;
  };
  email: string;
  password: string;
  phoneNumber: string;
  vehicle: {
    plate: string;
    colour: string;
    vehicleType: string;
  };
}

export interface SignupCaptainResponse {
  captain: Captain;
  token: string;
}

export interface ApiError {
  message?: string;
  errors?: Array<{
    msg: string;
    param: string;
    location: string;
  }>;
}

