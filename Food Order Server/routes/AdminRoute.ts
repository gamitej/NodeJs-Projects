import express, { NextFunction, Request, Response } from "express";
import { CreateVendor, GetVendorByID, GetVendors } from "../controller";

const router = express.Router();

router.post("/", CreateVendor);
router.get("/vendors", GetVendors);
router.get("/vendors/:id", GetVendorByID);

router.get("/", (req: Request, res: Response, next: NextFunction): any => {
  return res.json({ message: "Hello from admin" });
});

export { router as AdminRoute };
