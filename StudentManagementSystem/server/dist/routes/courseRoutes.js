"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courseController_1 = __importDefault(require("../controllers/courseController"));
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router
    .route("/courses")
    .get(middleware_1.authMiddleware, (req, res, next) => courseController_1.default.getCourses(req, res, next))
    .post(middleware_1.authMiddleware, (req, res, next) => courseController_1.default.createCourse(req, res, next));
router.get("/courses/:id", middleware_1.authMiddleware, (req, res, next) => courseController_1.default.getCourse(req, res, next));
router.put("/courses/edit/:id", middleware_1.authMiddleware, (req, res, next) => {
    courseController_1.default.updateCourse(req, res, next);
});
router.delete("/courses/delete/:id", middleware_1.authMiddleware, (req, res, next) => {
    courseController_1.default.deleteCourse(req, res, next);
});
exports.default = router;
