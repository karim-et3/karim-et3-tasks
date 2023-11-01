import { Request, Response, NextFunction } from "express";
import studentController from "../controllers/studentController";
import { Router } from "express";
import { authMiddleware } from "../middleware";

const router = Router();
router
  .route("/students")
  .get(authMiddleware, (req: Request, res: Response, next: NextFunction) =>
    studentController.getAllStudents(req, res, next)
  )
  .post(authMiddleware, (req: Request, res: Response, next: NextFunction) =>
    studentController.createStudent(req, res, next)
  );

router.get(
  "/students/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    studentController.getStudent(req, res, next)
);
router.put(
  "/students/edit/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    studentController.updateStudent(req, res, next)
);
router.delete(
  "/students/delete/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    studentController.deleteStudent(req, res, next)
);

export default router;
