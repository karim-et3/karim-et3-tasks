const Course = require("../models/Course");

exports.createCourse = async (req, res, next) => {
  try {
    const { code, subject, duration } = req.body.data;
    if (!code || !subject)
      return res.status(400).json({ message: "Missing data" });
    const duplicate = await Course.isDuplicateCode({ code });
    if (duplicate)
      return res.status(400).json({
        message: "A course with this code already exists.",
      });
    const [result] = await Course.save({ code, subject, duration });
    const insertId = result.insertId;
    console.log(insertId);
    const [[course]] = await Course.findById({ id: insertId });
    return res.status(201).json({ message: "Course created.", course });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const [courses] = await Course.findAll();
    setTimeout(() => {
      console.log("sending");
      return res.status(200).json({
        courses,
      });
    }, 3000);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[course]] = await Course.findById(id);
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
    const { code, subject, duration } = req.body.data;
    console.log(req.body);
    const { id } = req.params;
    if (!code || !subject || !id)
      return res.status(400).json({
        message: "Missing data.",
      });
    console.log(req.params);
    const result_checkDuplicateCode = await Course.isDuplicateCode({
      code,
      id,
    });
    if (result_checkDuplicateCode)
      return res.status(400).json({ message: "Duplicate code." });
    await Course.edit({ id, code, subject, duration });
    const [[course]] = await Course.findById(id);
    return res.status(200).json({
      message: "Course updated.",
      course,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
