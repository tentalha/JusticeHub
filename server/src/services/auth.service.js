import { User } from "../models";

export const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  let newUser = new User({
    name: user?.name,
    email: user?.email,
    password: user?.password,
    role: user?.role,
  });
  await newUser.save();
};
