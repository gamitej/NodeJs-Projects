import { Request, Response } from "express";
import { CreateVendorInput } from "../dto/Vendor.dto";

export const CreateVendor = async (
  req: Request,
  res: Response
): Promise<any> => {
  const {
    name,
    address,
    email,
    foodType,
    ownerName,
    password,
    phone,
    pincode,
  } = <CreateVendorInput>req.body;

  return res.json({ ...req.body });
};

export const GetVendors = async (req: Request, res: Response) => {};

export const GetVendorByID = async (req: Request, res: Response) => {};
