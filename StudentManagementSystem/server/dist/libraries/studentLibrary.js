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
exports.deleteStudent = exports.updateStudent = exports.getStudent = exports.getAllStudents = exports.createStudent = void 0;
const helpers_1 = require("../helpers");
const date_fns_1 = require("date-fns");
const Student_1 = require("../models/Student");
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const createStudent = ({ firstName, lastName, email, dateOfBirth, phoneNumber, address, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertID = yield Student_1.StudentInsert.save({
            firstName,
            lastName,
            email,
            dateOfBirth,
            phoneNumber,
            address,
        });
        const student = yield Student_1.StudentSelect.findById({ id: insertID });
        const formatedStudent = (0, helpers_1.renameKeys)(student, helpers_1.studentMap);
        return formatedStudent;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createStudent = createStudent;
const getAllStudents = ({ next }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Student_1.StudentSelect.findAll();
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAllStudents = getAllStudents;
const getStudent = ({ id, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield Student_1.StudentSelect.findById({ id });
        return student;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getStudent = getStudent;
const updateStudent = ({ id, firstName, lastName, email, dateOfBirth, phoneNumber, address, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id || isNaN(id))
            throw new CustomError_1.default("Invalid ID", 400);
        if (!firstName || !lastName || !email || !dateOfBirth)
            throw new CustomError_1.default("error occured (missing data).", 400);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const phoneRegex = /^(?:\D*|\d{8})$/;
        if (!emailRegex.test(email))
            throw new CustomError_1.default("Invalid Email", 400);
        if (!phoneRegex.test(phoneNumber))
            throw new CustomError_1.default("Invalid Phone number", 400);
        if (yield Student_1.StudentSelect.emailExist({ id, email }))
            throw new CustomError_1.default("Email already in use.", 409);
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(dateOfBirth)))
            throw new CustomError_1.default("Invalid date.", 400);
        const [result] = yield Student_1.StudentUpdate.edit({
            id,
            firstName,
            lastName,
            email,
            dateOfBirth,
            phoneNumber,
            address,
        });
        const student = yield Student_1.StudentSelect.findById({ id });
        const formatedStudent = (0, helpers_1.renameKeys)(student, helpers_1.studentMap);
        return formatedStudent;
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = ({ id, next, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Student_1.StudentDelete.delete({ id });
        console.log(result);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.deleteStudent = deleteStudent;
