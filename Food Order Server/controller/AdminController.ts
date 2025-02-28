import { Request, Response } from "express";
import { CreateVendorInput } from "../dto/Vendor.dto";

export const CreateVandor = async (
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

export const GetVandors = async (req: Request, res: Response) => {};

export const GetVandorByID = async (req: Request, res: Response) => {};
