//In this file all the routes are merged and then exported as single route object.
import { Router } from "express";
import testRoute from "./test.routes";
// --------------------------------------------------------->>
export const router = Router();

router.use("/", testRoute);
