"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const utils_1 = require("../../utils");
class GradeUpdate {
    static edit({ studentID, courseID, grade }) {
        const updatedDate = (0, helpers_1.formatdate)();
        const sql = `UPDATE grades SET grade = ?, updated_at = ? WHERE student_id = ? AND course_id = ?`;
        const result = utils_1.pool.query(sql, [grade, updatedDate, studentID, courseID]);
        return result;
    }
}
exports.default = GradeUpdate;
