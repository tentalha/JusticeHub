import { R2XX, R4XX } from "../API";
import {
  createOperator,
  deleteOperator,
  fetchAllOperators,
  fetchOperatorId,
  getUserByCNIC,
  getUserByEmail,
} from "../services";
import { USER_ALREADY_EXIST } from "../constants";
import { sanitizeUser } from "../utils";

export const getAllOperator = async (req, res, next) => {
  try {
    const operators = await fetchAllOperators();
    R2XX(res, 200, "SUCCESS", "Operators list in payload", { operators });
  } catch (error) {
    next(error);
  }
};

export const postOperator = async (req, res, next) => {
  try {
    const { email, CNIC } = req.body;
    // -------------------------------------------------------------------------->>
    const user = await getUserByEmail(email);
    if (user) {
      return R4XX(
        res,
        409,
        USER_ALREADY_EXIST.type,
        USER_ALREADY_EXIST.message
      );
    }
    // -------------------------------------------------------------------------->>
    const _user = await getUserByCNIC(CNIC);
    if (_user) {
      return R4XX(
        res,
        409,
        USER_ALREADY_EXIST.type,
        "Resource with this CNIC already exist."
      );
    }
    // -------------------------------------------------------------------------->>
    await createOperator(req.body);
    R2XX(res, 201, "SUCCESS", "Operator created successfully", req.body);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOperatorId = async (req, res, next) => {
  try {
    let id = req.params.id;
    const operator = await fetchOperatorId(id);
    if (!operator) {
      return R4XX(res, 404, "NOT-FOUND", `Operator with id /${id}/ not found`);
    }
    R2XX(res, 200, "SUCCESS", "Operator found", sanitizeUser(operator));
  } catch (error) {
    next(error);
  }
};

export const deleteOperatorId = async (req, res, next) => {
  try {
    let id = req.params.id;
    const operator = await deleteOperator(id);
    if (!operator) {
      return R4XX(res, 404, "NOT-FOUND", `Operator with id /${id}/ not found`);
    }
    R2XX(res, 200, "SUCCESS", "Operator Deleted");
  } catch (error) {
    console.log(error)
    next(error);
  }
};
