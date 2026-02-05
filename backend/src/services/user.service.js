import userModel from "../models/user.model.js";

export const createUser = async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  if (!email || !password || !firstName) {
    throw new Error("All fields are required");
  }
  const user = await userModel.create({
    fullname: {
      firstName,
      lastName,
    },
    email,
    password,
  });
  return user;
};

export const getUserByEmail = async (email) => {
  return await userModel.findOne({ email }).select("+password");
};

export const getUserById = async (id) => {
  return await userModel.findById(id);
};
