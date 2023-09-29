import { Router } from "express";
import { validate } from "../middlewares";

import { upload } from "../configs";

import { firCreationValidationRules } from "../validations";
import { createFir, getAllFIRs } from "../controllers";

const router = Router();

router.get("/", getAllFIRs);

router.post(
  "/",
  upload.single("relevantDocs"),
  firCreationValidationRules(),
  validate,
  createFir
);

export default router;
