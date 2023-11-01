import { Tgrade } from "../../types";
import { pool } from "../../utils";

class GradeInsert {
  static async save({ studentID, courseID, grade }: Tgrade) {
    const sqlCheckExist =
      "SELECT * FROM grades WHERE student_id = ? AND course_id = ? AND status = 1";
    const [resultCheckExist] = await pool.query(sqlCheckExist, [
      studentID,
      courseID,
    ]);
    if (Array.isArray(resultCheckExist) && resultCheckExist.length) {
      const sqlUpdate =
        "UPDATE grades SET grade = ? WHERE student_id = ? AND course_id = ?";
      const resultUpdate = await pool.query(sqlUpdate, [
        grade,
        studentID,
        courseID,
      ]);
      return resultUpdate;
    } else {
      const sqlInsert = `INSERT INTO grades (student_id, course_id, grade) VALUES (?, ?, ?)`;
      const resultInsert = await pool.query(sqlInsert, [
        studentID,
        courseID,
        grade,
      ]);
      return resultInsert;
    }
  }
  static addCourses({
    id,
    coursesToAdd,
  }: {
    id: number;
    coursesToAdd: number[];
  }) {
    const sql = "INSERT INTO grades (student_id, course_id) VALUES ?";
    const values = coursesToAdd.map((course) => [id, course]);
    const result = pool.query(sql, [values]);
    return result;
  }
}

export default GradeInsert;
