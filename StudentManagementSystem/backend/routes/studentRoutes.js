const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router
  .route("/students")
  .get((req, res, next) => studentController.getAllStudents(req, res, next))
  .post((req, res, next) => studentController.createStudent(req, res, next));

router.get("/students/:id", (req, res, next) =>
  studentController.getStudent(req, res, next)
);
router.put("/students/edit/:id", (req, res, next) =>
  studentController.updateStudent(req, res, next)
);

module.exports = router;
