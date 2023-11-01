import { Request, Response, NextFunction } from "express";

import { config } from "dotenv";
config();
import cors from "cors";
import express from "express";
import studentRouter from "./routes/studentRoutes";
import courseRouter from "./routes/courseRoutes";
import gradeRouter from "./routes/gradeRoutes";
import subjectRouter from "./routes/subjectRoutes";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3030;

app.use(studentRouter);
app.use(courseRouter);
app.use(gradeRouter);
app.use(subjectRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).json({
    message: err.message,
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
