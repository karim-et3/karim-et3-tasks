"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class GradeDelete {
    static removeCourses({ id, coursesToRemove, }) {
        const sql = "UPDATE grades SET status = 0 WHERE (student_id, course_id) IN (?)";
        const values = coursesToRemove.map((course) => [id, course]);
        const result = utils_1.pool.query(sql, [values]);
        return result;
    }
}
exports.default = GradeDelete;
