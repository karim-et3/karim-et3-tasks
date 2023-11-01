"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const { formatdate } = require("../../helpers");
class Grade {
    static save({ studentID, courseID, grade }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlCheckExist = "SELECT * FROM grades WHERE student_id = ? AND course_id = ?";
            const [resultCheckExist] = yield utils_1.pool.query(sqlCheckExist, [
                studentID,
                courseID,
            ]);
            if (resultCheckExist.length) {
                const sqlUpdate = "UPDATE grades SET grade = ? WHERE student_id = ? AND course_id = ?";
                const resultUpdate = yield utils_1.pool.query(sqlUpdate, [
                    grade,
                    studentID,
                    courseID,
                ]);
                return resultUpdate;
            }
            else {
                const sqlInsert = `INSERT INTO grades (student_id, course_id, grade) VALUES (?, ?, ?)`;
                const resultInsert = yield utils_1.pool.query(sqlInsert, [
                    studentID,
                    courseID,
                    grade,
                ]);
                return resultInsert;
            }
        });
    }
    static edit({ studentID, courseID, grade }) {
        const updatedDate = formatdate();
        const sql = `UPDATE grades SET grade = ?, updated_at = ? WHERE student_id = ? AND course_id = ?`;
        const result = utils_1.pool.query(sql, [grade, updatedDate, studentID, courseID]);
        return result;
    }
    static findByStudent({ studentID }) {
        const sql = `SELECT * FROM grades WHERE student_id = ?`;
        const result = utils_1.pool.query(sql, [studentID]);
        return result;
    }
    static findByCourse({ courseID }) {
        const sql = `SELECT * FROM grades WHERE course_id = ?`;
        const result = utils_1.pool.query(sql, [courseID]);
        return result;
    }
    static find({ studentID, courseID, }) {
        const sql = `SELECT * FROM grades WHERE student_id = ? AND course_id = ?`;
        const result = utils_1.pool.query(sql, [studentID, courseID]);
        return result;
    }
    static findAll() {
        const sql = `SELECT * FROM grades`;
        const result = utils_1.pool.query(sql);
        return result;
    }
    static findCourseByStudent({ id }) {
        const sql = `SELECT course_id FROM grades WHERE student_id = ?`;
        const result = utils_1.pool.query(sql, [id]);
        return result;
    }
    static addCourses({ id, coursesToAdd, }) {
        const sql = "INSERT INTO grades (student_id, course_id) VALUES ?";
        const values = coursesToAdd.map((course) => [id, course]);
        const result = utils_1.pool.query(sql, [values]);
        return result;
    }
    static removeCourses({ id, coursesToRemove, }) {
        const sql = "DELETE FROM grades WHERE (student_id, course_id) IN (?)";
        const values = coursesToRemove.map((course) => [id, course]);
        const result = utils_1.pool.query(sql, [values]);
        return result;
    }
}
module.exports = Grade;
