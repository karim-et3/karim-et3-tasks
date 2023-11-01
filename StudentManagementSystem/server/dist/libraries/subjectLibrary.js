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
exports.deleteSubject = exports.updateSubject = exports.getAllSubjects = exports.createSubject = void 0;
const Course_1 = require("../models/Course");
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const Subject_1 = require("../models/Subject");
const createSubject = ({ name, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!name)
            throw new CustomError_1.default("Missing data.", 400);
        if (yield Subject_1.SubjectSelect.doesNameExist({ name }))
            throw new CustomError_1.default("A Subject with the same name exist.", 409);
        name = name.toUpperCase();
        const insertID = yield Subject_1.SubjectInsert.save({ name });
        const subject = yield Subject_1.SubjectSelect.findById({ id: insertID });
        return subject;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createSubject = createSubject;
const getAllSubjects = ({ next }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subjects = yield Subject_1.SubjectSelect.findAll();
        return subjects;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAllSubjects = getAllSubjects;
const updateSubject = ({ id, name, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id || isNaN(id))
            throw new CustomError_1.default("request failed.", 400);
        if (!name)
            throw new CustomError_1.default("Missing Data.", 400);
        name = name.toUpperCase();
        if (yield Subject_1.SubjectSelect.doesNameExist({ name }))
            throw new CustomError_1.default("A Subject with the same name exist.", 409);
        yield Subject_1.SubjectUpdate.edit({ id, name });
        const result = yield Subject_1.SubjectSelect.findById({ id });
        return result;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.updateSubject = updateSubject;
const deleteSubject = ({ id, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id || isNaN(id))
            throw new CustomError_1.default("operation failed", 400);
        yield Subject_1.SubjectDelete.delete({ id });
        const courses = yield Course_1.CourseSelect.findAll();
        return courses;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.deleteSubject = deleteSubject;
