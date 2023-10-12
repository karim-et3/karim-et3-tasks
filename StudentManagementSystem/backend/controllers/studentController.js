const { parseISO, isValid } = require("date-fns");
const Student = require("../models/Student");

exports.createStudent = async (req, res, next) => {
  try {
    if (
      !req.body.data.firstName ||
      !req.body.data.lastName ||
      !req.body.data.email ||
      !req.body.data.dateOfBirth
    )
      return res.status(400).json({ message: "Missing data." });
    const s = new Student(
      req.body.data.firstName,
      req.body.data.lastName,
      req.body.data.email,
      req.body.data.dateOfBirth,
      req.body?.data.phoneNumber,
      req.body?.data.address
    );
    if (!s.isEmail())
      return res.status(400).json({ message: "Invalid Email." });
    if (await s.isDuplicateEmail())
      return res.status(409).json({ message: "Email already in use." });
    const [result] = await s.save();
    console.log(result);
    return res.status(201).json({ message: "student added.", data: result });
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
    const [[student]] = await Student.findById(id);
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
    } = req.body.data;
    const id = req.params.id;
    if (!first_name || !last_name || !email || !date_of_birth)
      return res.status(400).json({ message: "error occured (missing data)." });
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^(?:\D*|\d{8})$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Invalid Email" });
    if (!phoneRegex.test(phone_number))
      return res.status(400).json({ message: "Invalid Phone number" });
    const s = new Student(
      first_name,
      last_name,
      email,
      date_of_birth,
      phone_number,
      address
    );
    // const [result_checkSameEmail] = await Student.checkSameEmail(id, email);
    // if (result_checkSameEmail.length)
    //   return res.status(400).json({ message: "Email can't be the same." });
    const result_checkDuplicateEmail = await s.isDuplicateEmail(id, email);
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

exports.deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Student.delete(id);
    console.log(result);
    return res.status(200).json({ message: "Student deleted." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
