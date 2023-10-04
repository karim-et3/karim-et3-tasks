const { parseISO, isValid } = require("date-fns");
const Student = require("../models/Student");

exports.createStudent = async (req, res, next) => {
  try {
    const s = new Student(
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.date_of_birth,
      req.body?.phone_number,
      req.body?.address
    );
    const [result] = await s.save();
    return res.status(201).json({ message: "student created.", data: result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const [allStudents] = await Student.findAll();
    return res.status(200).json({ students: allStudents });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [student] = await Student.findById(id);
    return res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

checkEmail = async (req, res, next) => {
  try {
    console.log(result);
    return res.satus(200).json({ message: "working", result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      email,
      date_of_birth,
      phone_number,
      address,
    } = req.body;
    const id = req.params.id;
    if (!first_name || !last_name || !email || !date_of_birth)
      return res.status(400).json({ message: "error occured (missing data)." });
    // const [result_checkSameEmail] = await Student.checkSameEmail(id, email);
    // if (result_checkSameEmail.length)
    //   return res.status(400).json({ message: "Email can't be the same." });
    const [result_checkDuplicateEmail] = await Student.checkDuplicateEmail(
      id,
      email
    );
    if (result_checkDuplicateEmail.length)
      return res.status(400).json({ message: "Duplicate email." });
    if (!isValid(parseISO(date_of_birth)))
      return res.status(400).json({ message: "invalid date" });
    console.log(parseISO(date_of_birth));
    const [result] = await Student.edit(id, {
      first_name,
      last_name,
      email,
      date_of_birth,
      phone_number,
      address,
    });
    return res.status(200).json({ message: "student updates", result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
