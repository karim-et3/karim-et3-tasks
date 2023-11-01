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
const courseLibrary_1 = require("../libraries/courseLibrary");
const courseController = {
    createCourse: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { code, subjectID, duration } = req.body.data;
            const course = yield (0, courseLibrary_1.createCourse)({
                code,
                subjectID,
                duration,
                next,
            });
            return res.status(201).json({ message: "Course created.", course });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    getCourses: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const courses = yield (0, courseLibrary_1.getCourses)({ next });
            setTimeout(() => {
                return res.status(200).json({
                    courses,
                });
            }, 3000);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    getCourse: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const course = yield (0, courseLibrary_1.getCourse)({ id: parseInt(id), next });
            return res.status(200).json({
                course,
            });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    updateCourse: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { code, subjectID, duration } = req.body.data;
            const { id } = req.params;
            const course = yield (0, courseLibrary_1.updateCourse)({
                code,
                id: parseInt(id),
                duration,
                subjectID,
                next,
            });
            return res.status(200).json({
                message: "Course updated.",
                course,
            });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    deleteCourse: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const result = yield (0, courseLibrary_1.deleteCourse)({ id: parseInt(id), next });
            return res.status(200).json({ message: "Course deleted." });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
};
exports.default = courseController;
