//In this file all the routes are merged and then exported as single route object.
import { Router } from "express";
import authRoutes from "./auth.routes";
import { isNotLoggedIn as isNotLoggedInMW } from "../middlewares";
// --------------------------------------------------------->>
export const router = Router();

router.use("/auth", isNotLoggedInMW, authRoutes);
// router.use('/firs', firRoutes)
