"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentController_1 = __importDefault(require("../controllers/studentController"));
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router
    .route("/students")
    .get(middleware_1.authMiddleware, (req, res, next) => studentController_1.default.getAllStudents(req, res, next))
    .post(middleware_1.authMiddleware, (req, res, next) => studentController_1.default.createStudent(req, res, next));
router.get("/students/:id", middleware_1.authMiddleware, (req, res, next) => studentController_1.default.getStudent(req, res, next));
router.put("/students/edit/:id", middleware_1.authMiddleware, (req, res, next) => studentController_1.default.updateStudent(req, res, next));
router.delete("/students/delete/:id", middleware_1.authMiddleware, (req, res, next) => studentController_1.default.deleteStudent(req, res, next));
exports.default = router;
