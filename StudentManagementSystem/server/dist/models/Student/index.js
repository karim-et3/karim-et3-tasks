"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDelete = exports.StudentUpdate = exports.StudentSelect = exports.StudentInsert = void 0;
const insert_1 = __importDefault(require("./insert"));
exports.StudentInsert = insert_1.default;
const select_1 = __importDefault(require("./select"));
exports.StudentSelect = select_1.default;
const update_1 = __importDefault(require("./update"));
exports.StudentUpdate = update_1.default;
const delete_1 = __importDefault(require("./delete"));
exports.StudentDelete = delete_1.default;
