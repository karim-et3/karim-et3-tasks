import { Request, Response, NextFunction } from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} from "../libraries/courseLibrary";

const courseController = {
  createCourse: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code, subjectID, duration } = req.body.data;

      const course = await createCourse({
        code,
        subjectID,
        duration,
        next,
      });

      return res.status(201).json({ message: "Course created.", course });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  getCourses: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courses = await getCourses({ next });

      setTimeout(() => {
        return res.status(200).json({
          courses,
        });
      }, 3000);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  getCourse: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const course = await getCourse({ id: parseInt(id), next });

      return res.status(200).json({
        course,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  updateCourse: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code, subjectID, duration } = req.body.data;
      const { id } = req.params;

      const course = await updateCourse({
        code,
        id: parseInt(id),
        duration,
        subjectID,
        next,
      });

      return res.status(200).json({
        message: "Course updated.",
        course,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  deleteCourse: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const result = await deleteCourse({ id: parseInt(id), next });

      return res.status(200).json({ message: "Course deleted." });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

export default courseController;
