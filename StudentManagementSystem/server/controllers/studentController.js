const { parseISO, isValid } = require("date-fns");
const Student = require("../models/Student");
const { renameKeys, studentMap } = require("../global");

exports.createStudent = async (req, res, next) => {
  try {
    const { firstName, lastName, email, dateOfBirth, phoneNumber, address } =
      req.body.data;
    if (!firstName || !lastName || !email || !dateOfBirth)
      return res.status(400).json({ message: "Missing data." });

    if (!Student.isEmail(email))
      return res.status(400).json({ message: "Invalid Email." });
    if (await Student.doesEmailExist({ email }))
      return res.status(409).json({ message: "Email already in use." });
    const [result] = await Student.save({
      firstName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber,
      address,
    });
    console.log(result);
    const insertID = result.insertId;
    const [[student]] = await Student.findById(insertID);
    formatedStudent = renameKeys(student, studentMap);

    console.log(formatedStudent);
    return res
      .status(201)
      .json({ message: "student added.", student: formatedStudent });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const [allStudents] = await Student.findAll();
    const keyMap = {
      first_name: "firstName",
      last_name: "lastName",
      date_of_birth: "dateOfBirth",
      phone_number: "phoneNumber",
    };
    setTimeout(() => {
      formatedStudents = allStudents.map((student) =>
        renameKeys(student, studentMap)
      );
      console.log("sending");
      console.log(formatedStudents);
      return res.status(200).json({ students: formatedStudents });
    }, 5000);
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

exports.updateStudent = async (req, res, next) => {
  try {
    const { firstName, lastName, email, dateOfBirth, phoneNumber, address } =
      req.body.data;
    const { id } = req.params;
    if (!firstName || !lastName || !email || !dateOfBirth)
      return res.status(400).json({ message: "error occured (missing data)." });
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^(?:\D*|\d{8})$/;

    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Invalid Email" });
    if (!phoneRegex.test(phoneNumber))
      return res.status(400).json({ message: "Invalid Phone number" });

    if (await Student.doesEmailExist({ id, email }))
      return res.status(409).json({ message: "Email already in use." });
    if (!isValid(parseISO(dateOfBirth)))
      return res.status(400).json({ message: "Invalid date." });
    console.log(parseISO(dateOfBirth));
    const [result] = await Student.edit({
      id,
      firstName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber,
      address,
    });
    const [[student]] = await Student.findById(id);
    formatedStudent = renameKeys(student, studentMap);
    return res
      .status(200)
      .json({ message: "Student updated.", student: formatedStudent });
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
