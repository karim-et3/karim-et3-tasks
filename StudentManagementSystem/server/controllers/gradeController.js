const Grade = require("../models/Grade");

exports.createGrade = async (req, res, next) => {
  try {
    const { student_id, course_id, grade } = req.body;
    const [result] = await Grade.save({ student_id, course_id, grade });
    return res.status(201).json({ result });
  } catch (error) {
    console.log(error);
    next(next);
  }
};

exports.updateGrade = async (req, res, next) => {
  try {
    const { student_id, course_id, grade } = req.body;
    if (!course_id || !student_id || !grade)
      return res.status(400).json({ message: "misssing data" });
    const [result] = await Grade.edit({ student_id, course_id, grade });
    return res.status(200).json({ Message: "Grade updated.", result });
  } catch (error) {
    console.timeLog(error);
    next(error);
  }
};
exports.getGrade = async (req, res, next) => {
  try {
    const { student_id, course_id } = req.query;
    const [result] = await (student_id && course_id
      ? Grade.find({ student_id, course_id })
      : student_id && !course_id
      ? Grade.findByStudent({ student_id })
      : course_id && !student_id
      ? Grade.findByCourse({ course_id })
      : Grade.findAll());
    console.log(result);
    return res.status(200).json({ result });
  } catch (error) {
    console.timeLog(error);
    next(error);
  }
};
exports.editCourses = async (req, res, next) => {
  try {
    const { id } = req.body;
    const [oldCourses_inObject] = await Grade.findCourseByStudent(id);
    const oldCourses = oldCourses_inObject.map((course) => course.course_id);
    const newCourses = req.body.coursesCheked;
    const coursesToRemove = oldCourses.filter((n) => !newCourses.includes(n));
    const coursesToAdd = newCourses.filter((n) => !oldCourses.includes(n));
    console.log("coursesToRemove", coursesToRemove);
    console.log("coursesToAdd", coursesToAdd);
    if (coursesToAdd.length) {
      const [addResult] = await Grade.addCourses({ id, coursesToAdd });
      // console.log(addResult);
    } else console.warn("no courses to add");
    if (coursesToRemove.length) {
      const [removeResult] = await Grade.removeCourses({ id, coursesToRemove });
      // console.log(removeResult);
    } else console.warn("no courses to remove");
    const [courses_inObject] = await Grade.findCourseByStudent(id);
    const result = courses_inObject.map((course) => course.course_id);
    return res.status(200).json({ message: "courses updated", result });
  } catch (error) {
    console.timeLog(error);
    next(error);
  }
};
