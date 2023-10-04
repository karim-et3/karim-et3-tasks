const Course = require("../models/Course");

exports.createCourse = async (req, res, next) => {
  try {
    const { code, subject, duration } = req.body;
    // const c = new Course(code, subject, duration);
    const [result] = await Course.save({ code, subject, duration });
    return res.status(201).json({ message: "Course created.", result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getCourses = async (req, res, next) => {
  try {
    const [courses] = await Course.findAll();
    return res.status(200).json({
      courses,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [course] = await Course.findById(id);
    return res.status(200).json({
      course,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.updateCourse = async (req, res, next) => {
  try {
    const { code, subject, duration } = req.body;
    const { id } = req.params;
    if (!code || !subject)
      return res.status(400).json({
        message: "Missing data.",
      });
    const [result_checkDuplicateCode] = await Course.checkDuplicateCode(
      id,
      code
    );
    if (result_checkDuplicateCode.length)
      return res.status(400).json({ message: "Duplicate code." });
    const [result] = await Course.edit(id, { code, subject, duration });
    return res.status(200).json({
      message: "Course updated.",
      result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
