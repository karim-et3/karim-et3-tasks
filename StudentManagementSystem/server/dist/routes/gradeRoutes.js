"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gradeController_1 = __importDefault(require("../controllers/gradeController"));
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router
    .route("/grades")
    .post(middleware_1.authMiddleware, (req, res, next) => {
    gradeController_1.default.createGrade(req, res, next);
})
    .get(middleware_1.authMiddleware, (req, res, next) => {
    gradeController_1.default.getGrade(req, res, next);
});
// router.put(
//   "/grades/edit",
//   (req: Request, res: Response, next: NextFunction) => {
//     gradeController.updateGrade(req, res, next);
//   }
// );
router.post("/grades/edit-courses", middleware_1.authMiddleware, (req, res, next) => {
    gradeController_1.default.updateCourses(req, res, next);
});
exports.default = router;
