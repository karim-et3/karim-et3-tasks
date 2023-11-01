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
const maps_1 = require("../../helpers/maps");
const utils_1 = require("../../utils/");
class CourseSelect {
    static findById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM courses WHERE id = ? AND status = 1`;
            const [[result]] = yield utils_1.pool.query(sql, [id]);
            const formatedCourse = (0, helpers_1.renameKeys)(result, maps_1.courseMap);
            return formatedCourse;
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM courses WHERE status = 1`;
            const [result] = yield utils_1.pool.query(sql);
            if (Array.isArray(result)) {
                const formatedCourses = result.map((course) => (0, helpers_1.renameKeys)(course, maps_1.courseMap));
                return formatedCourses;
            }
        });
    }
    static findCourseIDByCode({ course }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT id FROM courses WHERE code = ? AND status = 1";
            const [[result]] = yield utils_1.pool.query(sql, [course]);
            const formatedCourse = (0, helpers_1.renameKeys)(result, maps_1.courseMap);
            return formatedCourse;
        });
    }
    static isDuplicateCode({ code, id }) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `SELECT * FROM courses WHERE code = ? AND status = 1`;
            let values = [code];
            if (id) {
                sql += ` AND id != ?`;
                values.push(id);
            }
            const [result] = yield utils_1.pool.query(sql, values);
            if (Array.isArray(result) && result.length !== 0)
                return true;
            else
                return false;
        });
    }
}
exports.default = CourseSelect;
