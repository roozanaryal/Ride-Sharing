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
