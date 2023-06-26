import express from "express";
import cors from "cors";
import { router } from "./routes";
// --------------------------------------------------->>
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

// --------------------------------------------------->>
app.use("/backend/api/", router);

export default app;
