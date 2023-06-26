import { Router } from "express";
import io from "../bin/www";

const router = Router();

router.get("/test", (req, res) => {
  try {
    res.send({ data: { message: "Test Data" } });
    io.emit("update", { data: "Test cleared!" });
  } catch (error) {
    res.status(400).send({ data: { message: "ERROR!" } });
  }
});

export default router;
