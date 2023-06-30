import { Router } from "express";
import { login as LoginC, register as RegisterC } from "../controllers";
import { loginValidationRules, registerValidationRules } from "../validations";
import { isLoggedIn, isNotLoggedIn, validate } from "../middlewares";

const router = Router();

router.post("/login", isNotLoggedIn, loginValidationRules(), validate, LoginC);

router.post(
  "/register",
  isNotLoggedIn,
  registerValidationRules(),
  validate,
  RegisterC
);

router.get("/test", isLoggedIn, (req, res) => {
  res.json({ message: "Here is the data requested" });
});

export default router;
