import { Request, Response, NextFunction } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
} from "../libraries/studentLibrary";
import { StudentSelect } from "../models/Student";

const studentController = {
  createStudent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { firstName, lastName, email, dateOfBirth, phoneNumber, address } =
        req.body.data;
      if (!firstName || !lastName || !email || !dateOfBirth)
        return res.status(400).json({ message: "Missing data." });
      if (!StudentSelect.isEmail({ email }))
        return res.status(400).json({ message: "Invalid Email." });
      if (await StudentSelect.emailExist({ email }))
        return res.status(409).json({ message: "Email already in use." });
      const student = await createStudent({
        firstName,
        lastName,
        email,
        dateOfBirth,
        phoneNumber,
        address,
        next,
      });
      console.log(student);
      setTimeout(() => {
        return res.status(201).json({ message: "student added.", student });
      }, 2000);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getAllStudents: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allStudents = await getAllStudents({ next });
      setTimeout(() => {
        console.log(allStudents);
        return res.status(200).json({ students: allStudents });
      }, 5000);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  getStudent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const student = await getStudent({ id: parseInt(id), next });
      setTimeout(() => {
        console.log(student);
        return res.status(200).json({ student });
      }, 1000);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  updateStudent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { firstName, lastName, email, dateOfBirth, phoneNumber, address } =
        req.body.data;
      const { id } = req.params;

      const formatedStudent = await updateStudent({
        id: parseInt(id),
        firstName,
        lastName,
        email,
        dateOfBirth,
        phoneNumber,
        address,
        next,
      });

      return res
        .status(200)
        .json({ message: "Student updated.", student: formatedStudent });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  deleteStudent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await deleteStudent({ id: parseInt(id), next });
      return res.status(200).json({ message: "Student deleted." });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

export default studentController;
