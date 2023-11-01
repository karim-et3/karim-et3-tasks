"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subjectController_1 = __importDefault(require("../controllers/subjectController"));
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router
    .route("/subjects")
    .post(middleware_1.authMiddleware, (req, res, next) => subjectController_1.default.createSubject(req, res, next))
    .get((req, res, next) => subjectController_1.default.getAllSubjects(req, res, next));
router.put("/subjects/edit/:id", middleware_1.authMiddleware, (req, res, next) => subjectController_1.default.updateSubject(req, res, next));
router.delete("/subjects/delete/:id", middleware_1.authMiddleware, (req, res, next) => subjectController_1.default.deleteSubject(req, res, next));
exports.default = router;
