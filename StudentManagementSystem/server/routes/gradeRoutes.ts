import { Request, Response, NextFunction } from "express";
import gradeController from "../controllers/gradeController";
import { Router } from "express";
import { authMiddleware } from "../middleware";

const router = Router();
router
  .route("/grades")
  .post(authMiddleware, (req: Request, res: Response, next: NextFunction) => {
    gradeController.createGrade(req, res, next);
  })
  .get(authMiddleware, (req: Request, res: Response, next: NextFunction) => {
    gradeController.getGrade(req, res, next);
  });
// router.put(
//   "/grades/edit",
//   (req: Request, res: Response, next: NextFunction) => {
//     gradeController.updateGrade(req, res, next);
//   }
// );

router.post(
  "/grades/edit-courses",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) => {
    gradeController.updateCourses(req, res, next);
  }
);

export default router;
