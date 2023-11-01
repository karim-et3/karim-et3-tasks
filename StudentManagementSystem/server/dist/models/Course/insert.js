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
class CourseInsert {
    static save({ code, subjectID, duration, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let placeholders = "?, ?";
            let values = "code, subject_id";
            if (duration) {
                placeholders += ", ?";
                values += ", duration";
            }
            const sql = `INSERT INTO courses(${values}) VALUES (${placeholders})`;
            const [result] = yield utils_1.pool.query(sql, [code, subjectID, duration]);
            return result.insertId;
        });
    }
}
exports.default = CourseInsert;
