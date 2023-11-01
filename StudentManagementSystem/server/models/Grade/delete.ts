import { pool } from "../../utils";

class GradeDelete {
  static removeCourses({
    id,
    coursesToRemove,
  }: {
    id: number;
    coursesToRemove: number[];
  }) {
    const sql =
      "UPDATE grades SET status = 0 WHERE (student_id, course_id) IN (?)";
    const values = coursesToRemove.map((course) => [id, course]);
    const result = pool.query(sql, [values]);
    return result;
  }
}

export default GradeDelete;
