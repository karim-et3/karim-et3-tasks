const express = require("express");
const router = express.Router();
const gradeController = require("../controllers/gradeController");

router
  .route("/grades")
  .post((req, res, next) => {
    gradeController.createGrade(req, res, next);
  })
  .get((req, res, next) => {
    gradeController.getGrade(req, res, next);
  });
router.put("/grades/edit", (req, res, next) => {
  gradeController.updateGrade(req, res, next);
});

router.post("/grades/edit-courses", (req, res, next) => {
  gradeController.editCourses(req, res, next);
});
module.exports = router;
