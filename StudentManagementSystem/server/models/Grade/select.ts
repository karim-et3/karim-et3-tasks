import { gradesMap, renameKeys } from "../../helpers";
import { Tcourse, Tgrade } from "../../types";
import { pool } from "../../utils";

class GradeSelect {
  static async findByStudent({ studentID }: { studentID: number }) {
    const sql = `SELECT * FROM grades WHERE student_id = ? AND status = 1`;
    const [result]: any = await pool.query(sql, [studentID]);
    const formatedGrade = result.map((grade: Tgrade) =>
      renameKeys(grade, gradesMap)
    );
    console.log("formatedGrade", formatedGrade);
    return formatedGrade;
  }

  static async findByCourse({ courseID }: { courseID: number }) {
    const sql = `SELECT * FROM grades WHERE course_id = ? AND status = 1`;
    const [result]: any = await pool.query(sql, [courseID]);
    const formatedGrade = result.map((grade: Tgrade) =>
      renameKeys(grade, gradesMap)
    );
    return formatedGrade;
  }

  static async find({
    studentID,
    courseID,
  }: {
    studentID: number;
    courseID: number;
  }) {
    const sql = `SELECT * FROM grades WHERE student_id = ? AND course_id = ? AND status = 1`;
    const [[result]]: any = await pool.query(sql, [studentID, courseID]);
    const formatedGrade = renameKeys(result, gradesMap);
    return formatedGrade;
  }

  static async findAll() {
    const sql = `SELECT * FROM grades WHERE status = 1`;
    const [result]: any = await pool.query(sql);
    const formatedGrade = result.map((grade: Tgrade) =>
      renameKeys(grade, gradesMap)
    );
    return formatedGrade;
  }
  static async findCoursesByStudent({ id }: { id: number }) {
    const sql = `SELECT course_id FROM grades WHERE student_id = ? AND status = 1`;
    const [result]: any = await pool.query(sql, [id]);

    const format = result.map((course: Tcourse) =>
      renameKeys(course, gradesMap)
    );
    console.log("CHECK FORMAT", format);
    return format;
  }

  // static async find({
  //   courseID,
  //   studentID,
  // }: {
  //   studentID?: number;
  //   courseID?: number;
  // }) {
  //   if (courseID && studentID) {
  //     const sql = `SELECT * FROM grades WHERE student_id = ? AND course_id = ?`;
  //     const result = pool.query(sql, [studentID, courseID]);
  //     return result;
  //   }
  //   if (studentID && !courseID) {
  //     const sql = `SELECT * FROM grades WHERE student_id = ?`;
  //     const result = pool.query(sql, [studentID]);
  //     return result;
  //   }
  //   if (courseID && !studentID) {
  //     const sql = `SELECT * FROM grades WHERE course_id = ?`;
  //     const result = pool.query(sql, [courseID]);
  //     return result;
  //   }
  //   if (!studentID && !courseID) {
  //     const sql = `SELECT * FROM grades`;
  //     const result = pool.query(sql);
  //     return result;
  //   }
  // }
}

export default GradeSelect;
