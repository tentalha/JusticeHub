import { User } from "../models";
import { hashPassword } from "../utils";

export const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  let hashPass = hashPassword(user?.password);
  try {
    let newUser = new User({
      name: user?.name,
      email: user?.email,
      password: await hashPassword(user?.password), //hashing password before saving in db.
      role: user?.role,
    });
    await newUser.save();
  } catch (error) {
    throw Promise.reject(error);
  }
};
