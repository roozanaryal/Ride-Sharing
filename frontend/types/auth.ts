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

export interface SignupCaptainData {
  fullname: {
    firstName: string;
    lastName: string;
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
  captain: {
    _id: string;
    fullname: {
      firstName: string;
      lastName: string;
    };
    email: string;
    phoneNumber: string;
    vehicle: {
      plate: string;
      colour: string;
      vehicleType: string;
    };
  };
  token: string;
}
