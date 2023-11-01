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
const pool = require("../utils/database");
class Subject {
    static save({ name }) {
        const sql = `INSERT INTO subjects(name) VALUES(?) `;
        const result = pool.query(sql, [name]);
        return result;
    }
    static findAll() {
        const sql = "SELECT * FROM subjects";
        const result = pool.query(sql);
        return result;
    }
    static findById({ id }) {
        const sql = "SELECT * FROM subjects WHERE id = ?";
        const result = pool.query(sql, [id]);
        return result;
    }
    static doesNameExist({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM subjects WHERE name = ?";
            const [result] = yield pool.query(sql, [name]);
            return result.length !== 0;
        });
    }
    static edit({ id, name }) {
        const sql = `UPDATE subjects SET name = ? WHERE id = ?`;
        const result = pool.query(sql, [name, id]);
        return result;
    }
    static delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql_courseID = "SELECT id FROM courses WHERE subject_id = ?";
            const [courseID] = yield pool.query(sql_courseID, [id]);
            if (courseID.length) {
                const listOfCoursesID = courseID.map((course) => course.id);
                const sql_grades = "DELETE FROM grades WHERE (course_id) IN (?)";
                yield pool.query(sql_grades, [listOfCoursesID]);
                const sql_courses = "DELETE FROM courses WHERE (id) IN (?)";
                yield pool.query(sql_courses, [listOfCoursesID]);
            }
            const sql_subjects = "DELETE FROM subjects WHERE id = ?";
            yield pool.query(sql_subjects, [id]);
        });
    }
}
module.exports = Subject;
