//In this file all the routes are merged and then exported as single route object.
import { Router } from "express";
import testRoutes from "./test.routes";
import authRoutes from "./auth.routes";
// --------------------------------------------------------->>
export const router = Router();

router.use("/temp", testRoutes);
router.use("/auth", authRoutes);
