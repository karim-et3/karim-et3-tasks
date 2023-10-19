const pool = require("../database");
const { formatdate } = require("../global");

class Grade {
  static save({ grade, courseID, studentID }) {
    const sql = `INSERT INTO grades (student_id, course_id, grade) VALUES (?, ?, ?)`;
    const result = pool.query(sql, [studentID, courseID, grade]);
    return result;
  }

  static edit({ studentID, courseID, grade }) {
    const updatedDate = formatdate();
    const sql = `UPDATE grades SET grade = ?, updated_at = ? WHERE student_id = ? AND course_id = ?`;
    const result = pool.query(sql, [grade, updatedDate, studentID, courseID]);
    return result;
  }

  static findByStudent({ studentID }) {
    const sql = `SELECT * FROM grades WHERE student_id = ?`;
    const result = pool.query(sql, [studentID]);
    return result;
  }

  static findByCourse({ courseID }) {
    const sql = `SELECT * FROM grades WHERE course_id = ?`;
    const result = pool.query(sql, [courseID]);
    return result;
  }

  static find({ studentID, courseID }) {
    const sql = `SELECT * FROM grades WHERE student_id = ? AND course_id = ?`;
    const result = pool.query(sql, [studentID, courseID]);
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
  static addCourses({ id, coursesToAdd }) {
    const sql = "INSERT INTO grades (student_id, course_id) VALUES ?";
    const values = coursesToAdd.map((course) => [id, course]);
    const result = pool.query(sql, [values]);
    return result;
  }
  static removeCourses({ id, coursesToRemove }) {
    const sql = "DELETE FROM grades WHERE (student_id, course_id) IN (?)";
    const values = coursesToRemove.map((course) => [id, course]);
    const result = pool.query(sql, [values]);
    return result;
  }
}
module.exports = Grade;
