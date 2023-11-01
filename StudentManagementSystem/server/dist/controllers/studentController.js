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
const studentLibrary_1 = require("../libraries/studentLibrary");
const Student_1 = require("../models/Student");
const studentController = {
    createStudent: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { firstName, lastName, email, dateOfBirth, phoneNumber, address } = req.body.data;
            if (!firstName || !lastName || !email || !dateOfBirth)
                return res.status(400).json({ message: "Missing data." });
            if (!Student_1.StudentSelect.isEmail({ email }))
                return res.status(400).json({ message: "Invalid Email." });
            if (yield Student_1.StudentSelect.emailExist({ email }))
                return res.status(409).json({ message: "Email already in use." });
            const student = yield (0, studentLibrary_1.createStudent)({
                firstName,
                lastName,
                email,
                dateOfBirth,
                phoneNumber,
                address,
                next,
            });
            console.log(student);
            setTimeout(() => {
                return res.status(201).json({ message: "student added.", student });
            }, 2000);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    getAllStudents: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allStudents = yield (0, studentLibrary_1.getAllStudents)({ next });
            setTimeout(() => {
                console.log(allStudents);
                return res.status(200).json({ students: allStudents });
            }, 5000);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    getStudent: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const student = yield (0, studentLibrary_1.getStudent)({ id: parseInt(id), next });
            setTimeout(() => {
                console.log(student);
                return res.status(200).json({ student });
            }, 1000);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    updateStudent: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { firstName, lastName, email, dateOfBirth, phoneNumber, address } = req.body.data;
            const { id } = req.params;
            const formatedStudent = yield (0, studentLibrary_1.updateStudent)({
                id: parseInt(id),
                firstName,
                lastName,
                email,
                dateOfBirth,
                phoneNumber,
                address,
                next,
            });
            return res
                .status(200)
                .json({ message: "Student updated.", student: formatedStudent });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    deleteStudent: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const result = yield (0, studentLibrary_1.deleteStudent)({ id: parseInt(id), next });
            return res.status(200).json({ message: "Student deleted." });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
};
exports.default = studentController;
