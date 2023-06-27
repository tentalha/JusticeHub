import { User } from "../models";

export const getUserByEmail = async (email) => {
  try {
    return await User.find({ email });
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  let newUser = {};
};
