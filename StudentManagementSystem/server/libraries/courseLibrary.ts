import {
  CourseDelete,
  CourseInsert,
  CourseSelect,
  CourseUpdate,
} from "../models/Course";
import { Tcourse } from "../types";
import { NextFunction } from "express";
import CustomError from "../utils/CustomError";

export const createCourse = async ({
  code,
  subjectID,
  duration,
  next,
}: Tcourse & { next: NextFunction }) => {
  try {
    if (!code || !subjectID) throw new CustomError("Missing Data.", 400);

    const duplicate = await CourseSelect.isDuplicateCode({ code });
    if (duplicate)
      throw new CustomError("A course with this code already exists.", 409);

    const insertId = await CourseInsert.save({ code, subjectID, duration });
    const course = await CourseSelect.findById({ id: insertId });
    console.log("[course]", course);
    return course;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateCourse = async ({
  code,
  id,
  duration,
  subjectID,
  next,
}: Tcourse & { next: NextFunction }) => {
  try {
    if (!code || !id || !subjectID) throw new CustomError("Missing data.", 400);
    const resultCheckDuplicateCode = await CourseSelect.isDuplicateCode({
      code,
      id,
    });
    if (resultCheckDuplicateCode) throw new CustomError("Duplicate code.", 409);

    await CourseUpdate.edit({ id, code, subjectID, duration });
    const course = await CourseSelect.findById({ id });
    return course;
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const deleteCourse = async ({
  id,
  next,
}: {
  id: number;
  next: NextFunction;
}) => {
  try {
    const result = await CourseDelete.delete({ id });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getCourse = async ({
  id,
  next,
}: {
  id: number;
  next: NextFunction;
}) => {
  try {
    if (isNaN(id)) throw new CustomError("Invalid Id.", 400);
    const course = await CourseSelect.findById({ id });
    return course;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getCourses = async ({ next }: { next: NextFunction }) => {
  try {
    const courses = await CourseSelect.findAll();
    return courses;
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// return new Promise((resolve, reject) => {
//   pool.query<OkPacket>(
//     "DELETE FROM users WHERE id = ?",
//     [user_id],
//     (err: any, res: { affectedRows: unknown; }) => {
//       if (err) reject(err);
//       else resolve(res.affectedRows);
//     }
//   );
// });
