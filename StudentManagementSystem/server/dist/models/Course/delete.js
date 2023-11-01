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
class CourseDelete {
    static delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlGrade = `UPDATE grades SET status = 0 WHERE course_id = ?`;
            const res1 = yield utils_1.pool.query(sqlGrade, [id]);
            const sqlCourse = `UPDATE courses SET status = 0 WHERE id = ?`;
            const res2 = yield utils_1.pool.query(sqlCourse, [id]);
            return [res1, res2];
        });
    }
}
exports.default = CourseDelete;
