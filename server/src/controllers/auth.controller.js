import { R2XX, R4XX } from "../API";
import { createUser, getUserByEmail } from "../services";
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
    await createUser(req.body);
    return R2XX(
      res,
      201,
      "SUCCESS",
      "Resource registered successfully!",
      req.body
    );
  } catch (error) {
    next(error);
  }
};
