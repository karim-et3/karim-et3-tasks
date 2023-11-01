import { Request, Response, NextFunction } from "express";
import subjectController from "../controllers/subjectController";
import { Router } from "express";
import { authMiddleware } from "../middleware";

const router = Router();
router
  .route("/subjects")
  .post(authMiddleware, (req: Request, res: Response, next: NextFunction) =>
    subjectController.createSubject(req, res, next)
  )
  .get((req: Request, res: Response, next: NextFunction) =>
    subjectController.getAllSubjects(req, res, next)
  );

router.put(
  "/subjects/edit/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    subjectController.updateSubject(req, res, next)
);
router.delete(
  "/subjects/delete/:id",
  authMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    subjectController.deleteSubject(req, res, next)
);

export default router;
