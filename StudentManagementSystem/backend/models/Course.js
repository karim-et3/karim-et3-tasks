const pool = require("../database");
const { formatdate } = require("../global");

class Course {
  // constructor(code, subject, duration) {
  //   this.code = code;
  //   this.subject = subject;
  //   this.duration = duration;
  // }

  // save() {
  //   const createdDate = formatdate();
  //   const sql = `INSERT INTO courses(code,subject, duration, created_at) VALUES (?, ?, ?, ?)`;
  //   const result = pool.query(sql, [
  //     this.code,
  //     this.subject,
  //     this.duration,
  //     createdDate,
  //   ]);
  //   return result;
  // }

  static save(data) {
    const sql = `INSERT INTO courses(code,subject, duration) VALUES (?, ?, ?)`;
    const result = pool.query(sql, [data.code, data.subject, data.duration]);
    return result;
  }

  static checkDuplicateCode(id, code) {
    const sql = `SELECT * FROM courses WHERE code = ? AND id != ?`;
    const result = pool.query(sql, [id, code]);
    return result;
  }

  // static edit(id, data) {
  //   const values = [];
  //   let sql = "UPDATE students SET ";

  //   if (data.code) {
  //     sql += "code = ?, ";
  //     values.push(data.code);
  //   }

  //   if (data.subject) {
  //     sql += "subject = ?, ";
  //     values.push(data.subject);
  //   }

  //   if (data.duration) {
  //     sql += "duration = ?, ";
  //     values.push(data.duration);
  //   }

  //   sql = sql.slice(0, -2);

  //   sql += " WHERE id = ?";
  //   values.push(id);

  //   const result = pool.query(sql, values);
  //   return result;
  // }

  static edit(id, data) {
    const updatedDate = formatdate();
    const sql = `UPDATE courses SET code = ?, subject = ?, duration = ?, updated_at = ? WHERE id = ?`;
    const result = pool.query(sql, [
      data.code,
      data.subject,
      data.duration,
      updatedDate,
      id,
    ]);
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
