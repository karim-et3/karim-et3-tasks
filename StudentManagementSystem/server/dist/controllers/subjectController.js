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
const subjectLibrary_1 = require("../libraries/subjectLibrary");
const subjectController = {
    createSubject: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { name } = req.body.data;
            const subject = yield (0, subjectLibrary_1.createSubject)({ name, next });
            return res.status(200).json({ message: "Subject added.", subject });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    getAllSubjects: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const subjects = yield (0, subjectLibrary_1.getAllSubjects)({ next });
            return res.status(200).json({ subjects });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    updateSubject: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { name } = req.body.data;
            const subject = yield (0, subjectLibrary_1.updateSubject)({ id: parseInt(id), name, next });
            return res.status(200).json({ message: "Subject updated.", subject });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    deleteSubject: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const courses = yield (0, subjectLibrary_1.deleteSubject)({ id: parseInt(id), next });
            return res.status(200).json({ message: "Subject deleted.", courses });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
};
exports.default = subjectController;
