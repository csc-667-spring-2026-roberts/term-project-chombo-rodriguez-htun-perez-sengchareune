import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response): void => {
  res.send("Server is running");
});

export default router;
