import express, { NextFunction, Request, Response } from "express";
import { CreateVandor, GetVandorByID, GetVandors } from "../controller";

const router = express.Router();

router.post("/vandor", CreateVandor);
router.get("/vandors", GetVandors);
router.get("/vandors/:id", GetVandorByID);

router.get("/", (req: Request, res: Response, next: NextFunction): any => {
  return res.json({ message: "Hello from admin" });
});

export { router as AdminRoute };
