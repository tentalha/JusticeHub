import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";

// --------------------------------------------------->>
const app = express();
// --------------------------------------------------->>

//Middle-wares
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use("/backend/api/", router);

// --------------------------------------------------->>
export default app;
