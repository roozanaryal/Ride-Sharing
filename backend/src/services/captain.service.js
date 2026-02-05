export const createCaptain = async ({
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  vehicleType,
  plate,
  colour,
}) => {
  if (
    !email ||
    !password ||
    !firstName ||
    !phoneNumber ||
    !vehicleType ||
    !plate ||
    !colour
  ) {
    throw new Error("All fields are required");
  }
  const captain = await captainModel.create({
    fullname: {
      firstName,
      lastName,
    },
    email,
    password,
    phoneNumber,
    vehicle: { 
      colour: colour,
      plate: plate,
      vehicleType: vehicleType,
    },
  });
  return captain;
};

export const getCaptainByEmail = async (email) => {
  return await captainModel .findOne({ email }).select("+password");
};

export const getCaptainById = async (id) => {
  return await captainModel.findById(id);
};

export const updateCaptainLocation = async (id, lat, lng) => {
  return await captainModel.findByIdAndUpdate(
    id,
    { "location.lat": lat, "location.lng": lng },
    { new: true },
  );
};

export const updateCaptainStatus = async (id, status) => {
  return await captainModel.findByIdAndUpdate(id, { status }, { new: true });
};

export const updateCaptainSocketId = async (id, socketId) => {
  return await captainModel.findByIdAndUpdate(id, { socketId }, { new: true });
};
