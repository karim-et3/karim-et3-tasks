import { pool } from "../../utils";

class StudentDelete {
  static async delete({ id }: { id: number }) {
    const sql_grades = `UPDATE grades SET status = 0 WHERE student_id = ?`;
    const result_grades = await pool.query(sql_grades, [id]);
    const sql_student = `UPDATE students SET status = 0 WHERE id = ?`;
    const result_student = await pool.query(sql_student, [id]);
    return { result_student, result_grades };
  }
}
export default StudentDelete;
