import { Router } from "express";
import { login, register } from "../controllers";
import { registerValidationRules } from "../validations";
import { validate } from "../middlewares";

const router = Router();

router.post("/login", login);
router.post("/register", registerValidationRules(), validate, register);

export default router;
