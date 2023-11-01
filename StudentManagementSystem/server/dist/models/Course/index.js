"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDelete = exports.CourseUpdate = exports.CourseSelect = exports.CourseInsert = void 0;
const insert_1 = __importDefault(require("./insert"));
exports.CourseInsert = insert_1.default;
const select_1 = __importDefault(require("./select"));
exports.CourseSelect = select_1.default;
const update_1 = __importDefault(require("./update"));
exports.CourseUpdate = update_1.default;
const delete_1 = __importDefault(require("./delete"));
exports.CourseDelete = delete_1.default;
