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
class GradeInsert {
    static save({ studentID, courseID, grade }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlCheckExist = "SELECT * FROM grades WHERE student_id = ? AND course_id = ? AND status = 1";
            const [resultCheckExist] = yield utils_1.pool.query(sqlCheckExist, [
                studentID,
                courseID,
            ]);
            if (Array.isArray(resultCheckExist) && resultCheckExist.length) {
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
    static addCourses({ id, coursesToAdd, }) {
        const sql = "INSERT INTO grades (student_id, course_id) VALUES ?";
        const values = coursesToAdd.map((course) => [id, course]);
        const result = utils_1.pool.query(sql, [values]);
        return result;
    }
}
exports.default = GradeInsert;
