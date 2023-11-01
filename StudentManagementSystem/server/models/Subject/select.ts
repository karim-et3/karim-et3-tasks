import { Tsubject } from "../../types";
import { pool } from "../../utils";

class SubjectSelect {
  static async findAll() {
    const sql = "SELECT * FROM subjects WHERE status = 1";
    const [result] = await pool.query(sql);
    return result;
  }
  static async findById({ id }: { id: number }) {
    const sql = "SELECT * FROM subjects WHERE id = ? AND status = 1";
    const [[result]]: any = await pool.execute(sql, [id]);
    return result;
  }
  static async doesNameExist({ name }: { name: string }) {
    const sql = "SELECT * FROM subjects WHERE name = ? AND status = 1";
    const [result] = await pool.query(sql, [name]);
    if (Array.isArray(result) && result.length !== 0) return true;
    else return false;
  }
}
export default SubjectSelect;
