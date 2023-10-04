const Grade = require("../models/Grade");

exports.createGrade = async (req, res, next) => {
  try {
    const { grade, student_id, course_id } = req.body;
    const g = new Grade(grade, student_id, course_id);
    const [result] = await g.save();
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
    const [result] = await Grade.edit(student_id, course_id, grade);
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
      ? Grade.find(student_id, course_id)
      : student_id && !course_id
      ? Grade.findByStudent(student_id)
      : course_id && !student_id
      ? Grade.findByCourse(course_id)
      : Grade.findAll());
    return res.status(200).json({ result });
  } catch (error) {
    console.timeLog(error);
    next(error);
  }
};
