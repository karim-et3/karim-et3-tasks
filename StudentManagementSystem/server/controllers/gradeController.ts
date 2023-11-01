import { Request, Response, NextFunction } from "express";
import {
  createGrade,
  getGrade,
  updateCourses,
} from "../libraries/gradeLibrary";

const gradeController = {
  createGrade: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { studentID, course, grade } = req.body;

      await createGrade({ studentID, course, grade, next });

      return res.status(201).json({ message: "Grade updated." });
    } catch (error) {
      console.log(error);
      next(next);
    }
  },
  updateCourses: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body.data;
      const newCourses = req.body.data.coursesCheked;

      const result = await updateCourses({
        id,
        newCourses,
        next,
      });

      return res.status(200).json({ message: "courses updated", result });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getGrade: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { studentID, courseID }: any = req.query;

      const result = await getGrade({
        courseID: parseInt(courseID),
        studentID: parseInt(studentID),
        next,
      });

      return res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

// exports.updateGrade = async (req, res, next) => {
//   try {
//     const { student_id, course_id, grade } = req.body;
//     if (!course_id || !student_id || !grade)
//       return res.status(400).json({ message: "misssing data" });
//     const [result] = await GradeUpdate.edit({ student_id, course_id, grade });
//     return res.status(200).json({ message: "Grade updated.", result });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

export default gradeController;
