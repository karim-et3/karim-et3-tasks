import { Request, Response, NextFunction } from "express";
import {
  createSubject,
  deleteSubject,
  getAllSubjects,
  updateSubject,
} from "../libraries/subjectLibrary";

const subjectController = {
  createSubject: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let { name } = req.body.data;

      const subject = await createSubject({ name, next });

      return res.status(200).json({ message: "Subject added.", subject });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  getAllSubjects: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subjects = await getAllSubjects({ next });

      return res.status(200).json({ subjects });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  updateSubject: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { name } = req.body.data;

      const subject = await updateSubject({ id: parseInt(id), name, next });

      return res.status(200).json({ message: "Subject updated.", subject });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  deleteSubject: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const courses = await deleteSubject({ id: parseInt(id), next });

      return res.status(200).json({ message: "Subject deleted.", courses });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

export default subjectController;
