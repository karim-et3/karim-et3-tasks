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
const helpers_1 = require("../../helpers");
const utils_1 = require("../../utils");
class GradeSelect {
    static findByStudent({ studentID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM grades WHERE student_id = ? AND status = 1`;
            const [result] = yield utils_1.pool.query(sql, [studentID]);
            const formatedGrade = result.map((grade) => (0, helpers_1.renameKeys)(grade, helpers_1.gradesMap));
            console.log("formatedGrade", formatedGrade);
            return formatedGrade;
        });
    }
    static findByCourse({ courseID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM grades WHERE course_id = ? AND status = 1`;
            const [result] = yield utils_1.pool.query(sql, [courseID]);
            const formatedGrade = result.map((grade) => (0, helpers_1.renameKeys)(grade, helpers_1.gradesMap));
            return formatedGrade;
        });
    }
    static find({ studentID, courseID, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM grades WHERE student_id = ? AND course_id = ? AND status = 1`;
            const [[result]] = yield utils_1.pool.query(sql, [studentID, courseID]);
            const formatedGrade = (0, helpers_1.renameKeys)(result, helpers_1.gradesMap);
            return formatedGrade;
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM grades WHERE status = 1`;
            const [result] = yield utils_1.pool.query(sql);
            const formatedGrade = result.map((grade) => (0, helpers_1.renameKeys)(grade, helpers_1.gradesMap));
            return formatedGrade;
        });
    }
    static findCoursesByStudent({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT course_id FROM grades WHERE student_id = ? AND status = 1`;
            const [result] = yield utils_1.pool.query(sql, [id]);
            const format = result.map((course) => (0, helpers_1.renameKeys)(course, helpers_1.gradesMap));
            console.log("CHECK FORMAT", format);
            return format;
        });
    }
}
exports.default = GradeSelect;
