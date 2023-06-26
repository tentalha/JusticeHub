import { Router } from "express";
import testRoute from "./test.routes";

// --------------------------------------------------------->>

export const router = Router();

router.use("/", testRoute);
