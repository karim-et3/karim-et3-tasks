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
const gradeLibrary_1 = require("../libraries/gradeLibrary");
const gradeController = {
    createGrade: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { studentID, course, grade } = req.body;
            yield (0, gradeLibrary_1.createGrade)({ studentID, course, grade, next });
            return res.status(201).json({ message: "Grade updated." });
        }
        catch (error) {
            console.log(error);
            next(next);
        }
    }),
    updateCourses: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.body.data;
            const newCourses = req.body.data.coursesCheked;
            const result = yield (0, gradeLibrary_1.updateCourses)({
                id,
                newCourses,
                next,
            });
            return res.status(200).json({ message: "courses updated", result });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    getGrade: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { studentID, courseID } = req.query;
            const result = yield (0, gradeLibrary_1.getGrade)({
                courseID: parseInt(courseID),
                studentID: parseInt(studentID),
                next,
            });
            return res.status(200).json({ result });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
};
// exports.updateGrade = async (req, res, next) => {
//   try {
//     const { student_id, course_id, grade } = req.body;
//     if (!course_id || !student_id || !grade)
//       return res.status(400).json({ message: "misssing data" });
//     const [result] = await GradeUpdate.edit({ student_id, course_id, grade });
//     return res.status(200).json({ message: "Grade updated.", result });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };
exports.default = gradeController;
