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
class SubjectDelete {
    static delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql_courseID = "SELECT id FROM courses WHERE subject_id = ? AND status = 1";
            const [courseID] = yield utils_1.pool.query(sql_courseID, [id]);
            if (Array.isArray(courseID) && courseID.length) {
                console.log("we are deleting both grades and courses");
                const listOfCoursesID = courseID.map((course) => {
                    if ("id" in course)
                        return course.id;
                });
                console.log(courseID);
                console.log(listOfCoursesID);
                const sql_grades = "UPDATE grades SET status = 0 WHERE course_id IN (?)";
                yield utils_1.pool.query(sql_grades, [listOfCoursesID]);
                const sql_courses = "UPDATE courses SET status = 0 WHERE id IN (?)";
                yield utils_1.pool.query(sql_courses, [listOfCoursesID]);
            }
            const sql_subjects = "UPDATE subjects SET status = 0 WHERE id = ?";
            yield utils_1.pool.query(sql_subjects, [id]);
        });
    }
}
exports.default = SubjectDelete;
