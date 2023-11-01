import { Tsubject } from "../../types";
import { pool } from "../../utils";

class SubjectInsert {
  static async save({ name }: Tsubject) {
    const sql = `INSERT INTO subjects(name) VALUES(?) `;
    const [result]: any = await pool.query(sql, [name]);
    return result.insertId;
  }
}
export default SubjectInsert;
