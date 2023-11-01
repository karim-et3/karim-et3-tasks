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
class SubjectSelect {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM subjects WHERE status = 1";
            const [result] = yield utils_1.pool.query(sql);
            return result;
        });
    }
    static findById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM subjects WHERE id = ? AND status = 1";
            const [[result]] = yield utils_1.pool.execute(sql, [id]);
            return result;
        });
    }
    static doesNameExist({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM subjects WHERE name = ? AND status = 1";
            const [result] = yield utils_1.pool.query(sql, [name]);
            if (Array.isArray(result) && result.length !== 0)
                return true;
            else
                return false;
        });
    }
}
exports.default = SubjectSelect;
