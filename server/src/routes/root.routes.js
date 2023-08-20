//In this file all the routes are merged and then exported as single route object.
import { Router } from "express";
import { isLoggedIn, isNotLoggedIn, hasRights } from "../middlewares";
import authRoutes from "./auth.routes";
import operatorRoutes from "./operator.routes";
import investigatorRoutes from "./investigator.routes";
// --------------------------------------------------------->>
export const router = Router();

router.use("/auth", isNotLoggedIn, authRoutes);
router.use("/operators", isLoggedIn, hasRights(["admin"]), operatorRoutes);
router.use(
  "/investigators",
  isLoggedIn,
  hasRights(["admin"]),
  investigatorRoutes
);
// router.use('/firs', firRoutes)
