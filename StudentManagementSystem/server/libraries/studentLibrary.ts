import { Tstudent } from "../types";
import { renameKeys, studentMap } from "../helpers";
import { isValid, parseISO } from "date-fns";
import {
  StudentDelete,
  StudentInsert,
  StudentSelect,
  StudentUpdate,
} from "../models/Student";
import { NextFunction } from "express";
import CustomError from "../utils/CustomError";

export const createStudent = async ({
  firstName,
  lastName,
  email,
  dateOfBirth,
  phoneNumber,
  address,
  next,
}: Tstudent & { next: NextFunction }) => {
  try {
    const insertID = await StudentInsert.save({
      firstName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber,
      address,
    });
    const student = await StudentSelect.findById({ id: insertID });
    const formatedStudent = renameKeys(student, studentMap);
    return formatedStudent;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllStudents = async ({ next }: { next: NextFunction }) => {
  try {
    return await StudentSelect.findAll();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getStudent = async ({
  id,
  next,
}: {
  id: number;
  next: NextFunction;
}) => {
  try {
    const student = await StudentSelect.findById({ id });
    return student;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateStudent = async ({
  id,
  firstName,
  lastName,
  email,
  dateOfBirth,
  phoneNumber,
  address,
  next,
}: Tstudent & { next: NextFunction }) => {
  try {
    if (!id || isNaN(id)) throw new CustomError("Invalid ID", 400);
    if (!firstName || !lastName || !email || !dateOfBirth)
      throw new CustomError("error occured (missing data).", 400);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^(?:\D*|\d{8})$/;

    if (!emailRegex.test(email)) throw new CustomError("Invalid Email", 400);
    if (!phoneRegex.test(phoneNumber))
      throw new CustomError("Invalid Phone number", 400);

    if (await StudentSelect.emailExist({ id, email }))
      throw new CustomError("Email already in use.", 409);
    if (!isValid(parseISO(dateOfBirth)))
      throw new CustomError("Invalid date.", 400);

    const [result] = await StudentUpdate.edit({
      id,
      firstName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber,
      address,
    });
    const student = await StudentSelect.findById({ id });
    const formatedStudent = renameKeys(student, studentMap);
    return formatedStudent;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteStudent = async ({
  id,
  next,
}: {
  id: number;
  next: NextFunction;
}) => {
  try {
    const result = await StudentDelete.delete({ id });
    console.log(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
