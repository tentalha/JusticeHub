import { R4XX } from "API";
import { getUserByEmail } from "../services";
import { USER_ALREADY_EXIST } from "../constants";

export const login = (req, res) => {
  try {
  } catch (error) {}
};

export const register = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);
    if (user) {
      return R4XX(
        res,
        400,
        USER_ALREADY_EXIST.type,
        USER_ALREADY_EXIST.message
      );
    }
    
  } catch (error) {
    next(error);
  }
};
