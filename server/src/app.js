import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";
import { R5XX } from "./API";
import './configs/dbConfig';
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
app.use(express.json());
app.use("/backend/api/", router);

app.use((error, req, res, next) => {
  R5XX(res, 500, "INTERNAL-SERVER-ERROR", null);
});
// --------------------------------------------------->>
export default app;
