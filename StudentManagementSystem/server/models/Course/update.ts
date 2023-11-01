import { Tcourse } from "../../types";
import { pool } from "../../utils";
import { formatdate } from "../../helpers";

class CourseUpdate {
  static async edit({ id, code, subjectID, duration }: Tcourse) {
    const updatedDate = formatdate();
    let placeholders = `code = ?, subject_id = ?, duration = ?, updated_at = ?`;
    let values = [code, subjectID, duration, updatedDate];
    const sql = `UPDATE courses SET ${placeholders} WHERE id = ?`;
    const [result] = await pool.query(sql, [...values, id]);
    return result;
  }
}

export default CourseUpdate;
