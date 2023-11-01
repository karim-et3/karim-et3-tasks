import { pool } from "../../utils";

class CourseDelete {
  static async delete({ id }: { id: number }) {
    const sqlGrade = `UPDATE grades SET status = 0 WHERE course_id = ?`;
    const res1 = await pool.query(sqlGrade, [id]);
    const sqlCourse = `UPDATE courses SET status = 0 WHERE id = ?`;
    const res2 = await pool.query(sqlCourse, [id]);
    return [res1, res2];
  }
}

export default CourseDelete;
