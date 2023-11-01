import { Tsubject } from "../../types";
import { pool } from "../../utils";

class SubjectUpdate {
  static edit({ id, name }: Tsubject) {
    const sql = `UPDATE subjects SET name = ? WHERE id = ?`;
    const result = pool.query(sql, [name, id]);
    return result;
  }
}
export default SubjectUpdate;
