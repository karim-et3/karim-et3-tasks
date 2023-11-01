import { NextFunction } from "express";
import { Tsubject } from "../types";
import { CourseSelect } from "../models/Course";
import CustomError from "../utils/CustomError";
import {
  SubjectDelete,
  SubjectInsert,
  SubjectSelect,
  SubjectUpdate,
} from "../models/Subject";

export const createSubject = async ({
  name,
  next,
}: Tsubject & { next: NextFunction }) => {
  try {
    if (!name) throw new CustomError("Missing data.", 400);
    if (await SubjectSelect.doesNameExist({ name }))
      throw new CustomError("A Subject with the same name exist.", 409);
    name = name.toUpperCase();
    const insertID = await SubjectInsert.save({ name });
    const subject = await SubjectSelect.findById({ id: insertID });
    return subject;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllSubjects = async ({ next }: { next: NextFunction }) => {
  try {
    const subjects = await SubjectSelect.findAll();
    return subjects;
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const updateSubject = async ({
  id,
  name,
  next,
}: Tsubject & { id: number; next: NextFunction }) => {
  try {
    if (!id || isNaN(id)) throw new CustomError("request failed.", 400);
    if (!name) throw new CustomError("Missing Data.", 400);
    name = name.toUpperCase();
    if (await SubjectSelect.doesNameExist({ name }))
      throw new CustomError("A Subject with the same name exist.", 409);
    await SubjectUpdate.edit({ id, name });
    const result = await SubjectSelect.findById({ id });
    return result;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteSubject = async ({
  id,
  next,
}: {
  id: number;
  next: NextFunction;
}) => {
  try {
    if (!id || isNaN(id)) throw new CustomError("operation failed", 400);
    await SubjectDelete.delete({ id });
    const courses = await CourseSelect.findAll();
    return courses;
  } catch (error) {
    console.log(error);
    next(error);
  }
};
