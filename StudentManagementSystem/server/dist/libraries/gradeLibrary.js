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
exports.updateCourses = exports.getGrade = exports.createGrade = void 0;
const Course_1 = require("../models/Course");
const Grade_1 = require("../models/Grade");
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const createGrade = ({ studentID, course, grade, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!studentID || !course || grade === undefined) {
            throw new CustomError_1.default("Missing data.", 400);
        }
        if (grade < 0 || grade > 100) {
            throw new CustomError_1.default("Failed to create grade.", 400);
        }
        const response = yield Course_1.CourseSelect.findCourseIDByCode({ course });
        const courseID = response.id;
        const [result] = yield Grade_1.GradeInsert.save({ studentID, courseID, grade });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createGrade = createGrade;
const getGrade = ({ courseID, studentID, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!isNaN(studentID) && !isNaN(courseID)) {
            console.log("in find");
            const result = yield Grade_1.GradeSelect.find({
                studentID,
                courseID,
            });
            return result;
        }
        if (!isNaN(studentID) && isNaN(courseID)) {
            console.log("in findByStudent");
            const result = yield Grade_1.GradeSelect.findByStudent({
                studentID,
            });
            return result;
        }
        if (isNaN(studentID) && !isNaN(courseID)) {
            console.log("in findByCourse");
            const result = yield Grade_1.GradeSelect.findByCourse({
                courseID,
            });
            return result;
        }
        if (isNaN(studentID) && isNaN(courseID)) {
            console.log("in findAll");
            const result = yield Grade_1.GradeSelect.findAll();
            ({
                studentID,
                courseID,
            });
            return result;
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getGrade = getGrade;
const updateCourses = ({ id, newCourses, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oldCourses_inObject = yield Grade_1.GradeSelect.findCoursesByStudent({
            id,
        });
        if (oldCourses_inObject) {
            const oldCourses = oldCourses_inObject.map((grade) => grade.courseID);
            const coursesToRemove = oldCourses.filter((n) => !newCourses.includes(n));
            const coursesToAdd = newCourses.filter((n) => !oldCourses.includes(n));
            console.log("coursesToRemove", coursesToRemove);
            console.log("coursesToAdd", coursesToAdd);
            if (coursesToAdd.length)
                yield Grade_1.GradeInsert.addCourses({ id, coursesToAdd });
            else
                console.warn("no courses to add");
            if (coursesToRemove.length)
                yield Grade_1.GradeDelete.removeCourses({ id, coursesToRemove });
            else
                console.warn("no courses to remove");
            const courses_inObject = yield Grade_1.GradeSelect.findCoursesByStudent({ id });
            const result = courses_inObject.map((grade) => grade.courseID);
            console.log("result", result);
            return result;
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.updateCourses = updateCourses;
