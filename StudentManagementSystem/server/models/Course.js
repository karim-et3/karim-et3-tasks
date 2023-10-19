const pool = require("../database");
const { formatdate } = require("../global");

class Course {
  static save({ code, subject, duration }) {
    let placeholders = "?, ?";
    let values = "code, subject";
    if (duration) {
      placeholders += ", ?";
      values += ", duration";
    }
    const sql = `INSERT INTO courses(${values}) VALUES (${placeholders})`;
    const result = pool.query(sql, [code, subject, duration]);
    return result;
  }

  static async isDuplicateCode({ code, id }) {
    let sql = `SELECT * FROM courses WHERE code = ?`;
    let values = [code];
    if (id) {
      sql += ` AND id != ?`;
      values.push(id);
    }
    const [result] = await pool.query(sql, values);
    return result.length !== 0;
  }

  static edit({ id, code, subject, duration }) {
    const updatedDate = formatdate();
    let placeholders = `code = ?, subject = ?, duration = ?, updated_at = ?`;
    let values = [code, subject, duration, updatedDate];
    const sql = `UPDATE courses SET ${placeholders} WHERE id = ?`;
    const result = pool.query(sql, [...values, id]);
    return result;
  }

  static findById(id) {
    const sql = `SELECT * FROM courses WHERE id = ?`;
    const result = pool.query(sql, [id]);
    return result;
  }

  static findAll() {
    const sql = `SELECT * FROM courses`;
    const result = pool.query(sql);
    return result;
  }
}
module.exports = Course;
