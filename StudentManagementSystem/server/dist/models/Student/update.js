"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const utils_1 = require("../../utils");
class StudentUpdate {
    static edit({ id, firstName, lastName, email, dateOfBirth, phoneNumber, address, }) {
        const updated_at = (0, helpers_1.formatdate)();
        const sql = `UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ?, phone_number = ?, address = ?, updated_at = ? WHERE id = ?`;
        const result = utils_1.pool.query(sql, [
            firstName,
            lastName,
            email,
            new Date(dateOfBirth),
            phoneNumber,
            address,
            updated_at,
            id,
        ]);
        return result;
    }
}
exports.default = StudentUpdate;
