"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class SubjectUpdate {
    static edit({ id, name }) {
        const sql = `UPDATE subjects SET name = ? WHERE id = ?`;
        const result = utils_1.pool.query(sql, [name, id]);
        return result;
    }
}
exports.default = SubjectUpdate;
