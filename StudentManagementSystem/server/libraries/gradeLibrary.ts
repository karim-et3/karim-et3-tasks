import { NextFunction } from "express";
import { CourseSelect } from "../models/Course";
import { GradeDelete, GradeInsert, GradeSelect } from "../models/Grade";
import CustomError from "../utils/CustomError";
import { log } from "console";
import { Tgrade } from "../types";

export const createGrade = async ({
  studentID,
  course,
  grade,
  next,
}: {
  studentID: number;
  course: string;
  grade: number;
  next: NextFunction;
}) => {
  try {
    if (!studentID || !course || grade === undefined) {
      throw new CustomError("Missing data.", 400);
    }
    if (grade < 0 || grade > 100) {
      throw new CustomError("Failed to create grade.", 400);
    }
    const response = await CourseSelect.findCourseIDByCode({ course });
    const courseID = response.id;
    const [result] = await GradeInsert.save({ studentID, courseID, grade });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getGrade = async ({
  courseID,
  studentID,
  next,
}: {
  courseID: number;
  studentID: number;
  next: NextFunction;
}) => {
  try {
    if (!isNaN(studentID) && !isNaN(courseID)) {
      console.log("in find");
      const result = await GradeSelect.find({
        studentID,
        courseID,
      });
      return result;
    }
    if (!isNaN(studentID) && isNaN(courseID)) {
      console.log("in findByStudent");
      const result = await GradeSelect.findByStudent({
        studentID,
      });
      return result;
    }
    if (isNaN(studentID) && !isNaN(courseID)) {
      console.log("in findByCourse");
      const result = await GradeSelect.findByCourse({
        courseID,
      });
      return result;
    }
    if (isNaN(studentID) && isNaN(courseID)) {
      console.log("in findAll");
      const result = await GradeSelect.findAll();
      ({
        studentID,
        courseID,
      });
      return result;
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const updateCourses = async ({
  id,
  newCourses,
  next,
}: {
  id: number;
  newCourses: number[];
  next: NextFunction;
}) => {
  try {
    const oldCourses_inObject = await GradeSelect.findCoursesByStudent({
      id,
    });
    if (oldCourses_inObject) {
      const oldCourses = oldCourses_inObject.map(
        (grade: Tgrade) => grade.courseID
      );
      const coursesToRemove = oldCourses.filter(
        (n: number) => !newCourses.includes(n)
      );
      const coursesToAdd = newCourses.filter(
        (n: number) => !oldCourses.includes(n)
      );
      console.log("coursesToRemove", coursesToRemove);
      console.log("coursesToAdd", coursesToAdd);
      if (coursesToAdd.length)
        await GradeInsert.addCourses({ id, coursesToAdd });
      else console.warn("no courses to add");
      if (coursesToRemove.length)
        await GradeDelete.removeCourses({ id, coursesToRemove });
      else console.warn("no courses to remove");
      const courses_inObject = await GradeSelect.findCoursesByStudent({ id });

      const result = courses_inObject.map((grade: Tgrade) => grade.courseID);
      console.log("result", result);
      return result;
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
