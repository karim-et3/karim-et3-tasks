const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router
  .route("/courses")
  .get((req, res, next) => courseController.getCourses(req, res, next))
  .post((req, res, next) => courseController.createCourse(req, res, next));

router.get("/courses/:id", (req, res, next) =>
  courseController.getCourse(req, res, next)
);
router.put("/courses/edit/:id", (req, res, next) => {
  courseController.updateCourse(req, res, next);
});
module.exports = router;
