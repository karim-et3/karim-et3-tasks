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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourses = exports.getCourse = exports.deleteCourse = exports.updateCourse = exports.createCourse = void 0;
const Course_1 = require("../models/Course");
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const createCourse = ({ code, subjectID, duration, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!code || !subjectID)
            throw new CustomError_1.default("Missing Data.", 400);
        const duplicate = yield Course_1.CourseSelect.isDuplicateCode({ code });
        if (duplicate)
            throw new CustomError_1.default("A course with this code already exists.", 409);
        const insertId = yield Course_1.CourseInsert.save({ code, subjectID, duration });
        const course = yield Course_1.CourseSelect.findById({ id: insertId });
        console.log("[course]", course);
        return course;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createCourse = createCourse;
const updateCourse = ({ code, id, duration, subjectID, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!code || !id || !subjectID)
            throw new CustomError_1.default("Missing data.", 400);
        const resultCheckDuplicateCode = yield Course_1.CourseSelect.isDuplicateCode({
            code,
            id,
        });
        if (resultCheckDuplicateCode)
            throw new CustomError_1.default("Duplicate code.", 409);
        yield Course_1.CourseUpdate.edit({ id, code, subjectID, duration });
        const course = yield Course_1.CourseSelect.findById({ id });
        return course;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.updateCourse = updateCourse;
const deleteCourse = ({ id, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Course_1.CourseDelete.delete({ id });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.deleteCourse = deleteCourse;
const getCourse = ({ id, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (isNaN(id))
            throw new CustomError_1.default("Invalid Id.", 400);
        const course = yield Course_1.CourseSelect.findById({ id });
        return course;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getCourse = getCourse;
const getCourses = ({ next }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield Course_1.CourseSelect.findAll();
        return courses;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getCourses = getCourses;
// return new Promise((resolve, reject) => {
//   pool.query<OkPacket>(
//     "DELETE FROM users WHERE id = ?",
//     [user_id],
//     (err: any, res: { affectedRows: unknown; }) => {
//       if (err) reject(err);
//       else resolve(res.affectedRows);
//     }
//   );
// });
