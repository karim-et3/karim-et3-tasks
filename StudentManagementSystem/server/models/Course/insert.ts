import { pool } from "../../utils";

class CourseInsert {
  static async save({
    code,
    subjectID,
    duration,
  }: {
    code: string;
    subjectID: number;
    duration: string;
  }) {
    let placeholders = "?, ?";
    let values = "code, subject_id";
    if (duration) {
      placeholders += ", ?";
      values += ", duration";
    }
    const sql = `INSERT INTO courses(${values}) VALUES (${placeholders})`;
    const [result]: any = await pool.query(sql, [code, subjectID, duration]);
    return result.insertId;
  }
}

export default CourseInsert;
