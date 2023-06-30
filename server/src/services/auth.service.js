import { User } from "../models";
import { hashPassword } from "../utils";

export const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    return error;
  }
};

export const createUser = async (user) => {
  try {
    let newUser = new User({
      name: user?.name,
      email: user?.email,
      password: await hashPassword(user?.password), //hashing password before saving in db.
      role: user?.role,
    });
    await newUser.save();
  } catch (error) {
    return Promise.reject(error);
  }
};
