import { renameKeys, studentMap } from "../../helpers";
import { Tstudent } from "../../types";
import { pool } from "../../utils";

class StudentSelect {
  static async findById({ id }: { id: number | string }) {
    const sql = `SELECT * FROM students WHERE id = ? AND status = 1`;
    const [[result]]: any = await pool.query(sql, [id]);
    return result;
  }

  static async findAll() {
    const sql = `SELECT * FROM students WHERE status = 1`;
    const [result]: any = await pool.query(sql);
    const formatedStudents = result.map((student: Tstudent) =>
      renameKeys(student, studentMap)
    );
    return formatedStudents;
  }

  static emailExist = async ({ email, id }: { email: string; id?: number }) => {
    let values: any[] = [email];
    let sql = `SELECT * FROM students WHERE email = ? AND status = 1`;
    if (id) {
      sql += " AND id != ?";
      values.push(id);
    }
    const [result] = await pool.query(sql, values);
    const resul = await pool.query(sql, values);
    if (Array.isArray(result) && result.length !== 0) return true;
    else return false;
  };

  static isEmail({ email }: { email: string }) {
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== "" && email.match(emailFormat)) {
      return true;
    }
    return false;
  }
}
export default StudentSelect;
