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
class StudentInsert {
    static save({ firstName, lastName, email, dateOfBirth, phoneNumber, address, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [firstName, lastName, email, new Date(dateOfBirth)];
            let placeholders = "?, ?, ?, ?";
            let columns = "first_name, last_name, email, date_of_birth";
            if (phoneNumber) {
                placeholders += ", ?";
                columns += ", phone_number";
                values.push(phoneNumber);
            }
            if (address) {
                placeholders += ", ?";
                columns += ", address";
                values.push(address);
            }
            const sql = `INSERT INTO students(${columns}) VALUES (${placeholders})`;
            const [result] = yield utils_1.pool.query(sql, values);
            return result.insertId;
        });
    }
}
exports.default = StudentInsert;
