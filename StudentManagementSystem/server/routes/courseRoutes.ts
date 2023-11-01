import { Request, Response, NextFunction } from "express";
import courseController from "../controllers/courseController";
import { Router } from "express";
import { authMiddleware } from "../middleware";

const router = Router();
router
  .route("/courses")
  .get(authMiddleware, (req: Request, res: Response, next: NextFunction) =>
    courseController.getCourses(req, res, next)
  )
  .post(authMiddleware, (req: Request, res: Response, next: NextFunction) =>
    courseController.createCourse(req, res, next)
  );

router.get(
  "/courses/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    courseController.getCourse(req, res, next)
);
router.put(
  "/courses/edit/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) => {
    courseController.updateCourse(req, res, next);
  }
);
router.delete(
  "/courses/delete/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) => {
    courseController.deleteCourse(req, res, next);
  }
);

export default router;
