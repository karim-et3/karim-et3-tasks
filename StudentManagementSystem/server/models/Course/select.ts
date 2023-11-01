import { renameKeys } from "../../helpers";
import { courseMap } from "../../helpers/maps";
import { Tcourse } from "../../types";
import { pool } from "../../utils/";

class CourseSelect {
  static async findById({ id }: { id: number }) {
    const sql = `SELECT * FROM courses WHERE id = ? AND status = 1`;
    const [[result]]: any = await pool.query(sql, [id]);
    const formatedCourse = renameKeys(result, courseMap);
    return formatedCourse;
  }

  static async findAll() {
    const sql = `SELECT * FROM courses WHERE status = 1`;
    const [result]: any = await pool.query(sql);
    if (Array.isArray(result)) {
      const formatedCourses = result.map((course: Tcourse) =>
        renameKeys(course, courseMap)
      );
      return formatedCourses;
    }
  }

  static async findCourseIDByCode({ course }: { course: string }) {
    const sql = "SELECT id FROM courses WHERE code = ? AND status = 1";
    const [[result]]: any = await pool.query(sql, [course]);
    const formatedCourse = renameKeys(result, courseMap);
    return formatedCourse;
  }

  static async isDuplicateCode({ code, id }: { code: string; id?: number }) {
    let sql = `SELECT * FROM courses WHERE code = ? AND status = 1`;
    let values: any[] = [code];
    if (id) {
      sql += ` AND id != ?`;
      values.push(id);
    }
    const [result] = await pool.query(sql, values);
    if (Array.isArray(result) && result.length !== 0) return true;
    else return false;
  }
}

export default CourseSelect;
