import { R2XX } from "../API";

export const meController = (req, res, next) => {
  try {
    return R2XX(res, 200, "AUTHORIZED", "User is authorized", null);
  } catch (error) {
    next(error);
  }
};
