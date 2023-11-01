import { formatdate } from "../../helpers";
import { Tgrade } from "../../types";
import { pool } from "../../utils";

class GradeUpdate {
  static edit({ studentID, courseID, grade }: Tgrade) {
    const updatedDate = formatdate();
    const sql = `UPDATE grades SET grade = ?, updated_at = ? WHERE student_id = ? AND course_id = ?`;
    const result = pool.query(sql, [grade, updatedDate, studentID, courseID]);
    return result;
  }
}
export default GradeUpdate;
