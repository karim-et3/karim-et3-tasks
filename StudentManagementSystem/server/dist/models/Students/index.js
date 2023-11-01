"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require("../utils/database");
// import { pool } from "../utils";
const { formatdate } = require("../global");
class Student {
  static save({
    firstName,
    lastName,
    email,
    dateOfBirth,
    phoneNumber,
    address,
  }) {
    let values = [firstName, lastName, email, new Date(dateOfBirth)];
    let placeholders = "?, ?, ?, ?";
    let columns = "first_name, last_name, email, date_of_birth";
    if (phoneNumber) {
      placeholders += ", ?";
      columns += ", phone_number";
      values.push(phoneNumber);
    }
    if (address) {
      placeholders += ", ?";
      columns += ", address";
      values.push(address);
    }
    const sql = `INSERT INTO students(${columns}) VALUES (${placeholders})`;
    const result = pool.query(sql, values);
    return result;
  }
  static isEmail({ email }) {
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== "" && email.match(emailFormat)) {
      return true;
    }
    return false;
  }
  static edit({
    id,
    firstName,
    lastName,
    email,
    dateOfBirth,
    phoneNumber,
    address,
  }) {
    const updated_at = formatdate();
    const sql = `UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ?, phone_number = ?, address = ?, updated_at = ? WHERE id = ?`;
    const result = pool.query(sql, [
      firstName,
      lastName,
      email,
      new Date(dateOfBirth),
      phoneNumber,
      address,
      updated_at,
      id,
    ]);
    return result;
  }
  static findById({ id }) {
    const sql = `SELECT * FROM students WHERE id = ?`;
    const result = pool.query(sql, [id]);
    return result;
  }
  static findAll() {
    const sql = `SELECT * FROM students`;
    const result = pool.query(sql);
    return result;
  }
  static delete({ id }) {
    return __awaiter(this, void 0, void 0, function* () {
      const sql_grades = `DELETE FROM grades WHERE student_id = ?`;
      const result_grades = yield pool.query(sql_grades, [id]);
      const sql_student = `DELETE FROM students WHERE id = ?`;
      const result_student = yield pool.query(sql_student, [id]);
      return { result_student, result_grades };
    });
  }
}
_a = Student;
Student.emailExist = ({ email, id }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let values = [email];
    let sql = `SELECT * FROM students WHERE email = ?`;
    if (id) {
      sql += " AND id != ?";
      values.push(id);
    }
    const [result] = yield pool.query(sql, values);
    return result.length !== 0;
  });
module.exports = Student;
