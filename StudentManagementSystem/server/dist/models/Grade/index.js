"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeDelete = exports.GradeUpdate = exports.GradeSelect = exports.GradeInsert = void 0;
const insert_1 = __importDefault(require("./insert"));
exports.GradeInsert = insert_1.default;
const select_1 = __importDefault(require("./select"));
exports.GradeSelect = select_1.default;
const update_1 = __importDefault(require("./update"));
exports.GradeUpdate = update_1.default;
const delete_1 = __importDefault(require("./delete"));
exports.GradeDelete = delete_1.default;
