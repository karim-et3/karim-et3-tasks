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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const utils_1 = require("../../utils");
class StudentSelect {
    static findById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM students WHERE id = ? AND status = 1`;
            const [[result]] = yield utils_1.pool.query(sql, [id]);
            return result;
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM students WHERE status = 1`;
            const [result] = yield utils_1.pool.query(sql);
            const formatedStudents = result.map((student) => (0, helpers_1.renameKeys)(student, helpers_1.studentMap));
            return formatedStudents;
        });
    }
    static isEmail({ email }) {
        const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (email !== "" && email.match(emailFormat)) {
            return true;
        }
        return false;
    }
}
_a = StudentSelect;
StudentSelect.emailExist = ({ email, id }) => __awaiter(void 0, void 0, void 0, function* () {
    let values = [email];
    let sql = `SELECT * FROM students WHERE email = ? AND status = 1`;
    if (id) {
        sql += " AND id != ?";
        values.push(id);
    }
    const [result] = yield utils_1.pool.query(sql, values);
    const resul = yield utils_1.pool.query(sql, values);
    if (Array.isArray(result) && result.length !== 0)
        return true;
    else
        return false;
});
exports.default = StudentSelect;
