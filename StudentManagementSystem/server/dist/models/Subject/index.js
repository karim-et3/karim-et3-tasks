"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectDelete = exports.SubjectUpdate = exports.SubjectSelect = exports.SubjectInsert = void 0;
const insert_1 = __importDefault(require("./insert"));
exports.SubjectInsert = insert_1.default;
const select_1 = __importDefault(require("./select"));
exports.SubjectSelect = select_1.default;
const update_1 = __importDefault(require("./update"));
exports.SubjectUpdate = update_1.default;
const delete_1 = __importDefault(require("./delete"));
exports.SubjectDelete = delete_1.default;
