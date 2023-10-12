const pool = require("../database");
const { formatdate } = require("../global");

class Grade {
  constructor(student_id, course_id, grade) {
    this.grade = grade;
    this.course_id = course_id;
    this.student_id = student_id;
  }
  save() {
    const sql = `INSERT INTO grades (student_id, course_id, grade) VALUES (?, ?, ?)`;
    const result = pool.query(sql, [
      this.student_id,
      this.course_id,
      this.grade,
    ]);
    return result;
  }

  static edit(student_id, course_id, grade) {
    const updatedDate = formatdate();
    const sql = `UPDATE grades SET grade = ?, updated_at = ? WHERE student_id = ? AND course_id = ?`;
    const result = pool.query(sql, [grade, updatedDate, student_id, course_id]);
    return result;
  }

  static findByStudent(student_id) {
    const sql = `SELECT * FROM grades WHERE student_id = ?`;
    const result = pool.query(sql, [student_id]);
    return result;
  }

  static findByCourse(course_id) {
    const sql = `SELECT * FROM grades WHERE course_id = ?`;
    const result = pool.query(sql, [course_id]);
    return result;
  }

  static find(student_id, course_id) {
    const sql = `SELECT * FROM grades WHERE student_id = ? AND course_id = ?`;
    const result = pool.query(sql, [student_id, course_id]);
    return result;
  }

  static findAll() {
    const sql = `SELECT * FROM grades`;
    const result = pool.query(sql);
    return result;
  }
  static findCourseByStudent(id) {
    const sql = `SELECT course_id FROM grades WHERE student_id = ?`;
    const result = pool.query(sql, [id]);
    return result;
  }
  static addCourses(id, coursesToAdd) {
    const sql = "INSERT INTO grades (student_id, course_id) VALUES ?";
    const values = coursesToAdd.map((course) => [id, course]);
    const result = pool.query(sql, [values]);
    return result;
  }
  static removeCourses(id, coursesToRemove) {
    const sql = "DELETE FROM grades WHERE (student_id, course_id) IN (?)";
    const values = coursesToRemove.map((course) => [id, course]);
    const result = pool.query(sql, [values]);
    return result;
  }
}
module.exports = Grade;
