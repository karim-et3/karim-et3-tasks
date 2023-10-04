require("dotenv").config();

const express = require("express");
const studentRouter = require("./routes/studentRoutes");
const coursRouter = require("./routes/courseRoutes");
const gradeRouter = require("./routes/gradeRoutes");
const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  res.status(500).json({
    message: "Something went wrong.",
  });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

app.use(studentRouter);
app.use(coursRouter);
app.use(gradeRouter);
