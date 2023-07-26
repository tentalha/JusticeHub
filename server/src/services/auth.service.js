import { User } from "../models";
import { hashPassword } from "../utils";

export const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    return error;
  }
};

export const getUserByCNIC = async (CNIC) => {
  try {
    return await User.findOne({ CNIC });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createUser = async (user) => {
  try {
    let newUser = new User({
      name: user?.name,
      email: user?.email,
      password: await hashPassword(user?.password), //hashing password before saving in db.
      role: user?.role,
      CNIC: user?.CNIC
    });
    await newUser.save();
  } catch (error) {
    return Promise.reject(error);
  }
};