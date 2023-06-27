import { Router } from "express";
import { io } from "../bin";
import { R2XX } from "../API";

const router = Router();

router.get("/test", (req, res) => {
  try {
    io.emit("update", { data: "Test cleared!" });
    R2XX(res, 200, "SUCCESS", "Data found", { data: [1, 2, 3, 4, 5] });
  } catch (error) {
    res.status(400).send({ data: { message: "ERROR!" } });
  }
});

export default router;
