import { Request, Response } from "express";
import { CreateVendorInput } from "../dto/Vendor.dto";
import { Vendor } from "../models";

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

  const createdVandor = await Vendor.create({
    name: name,
    address: address,
    pincode: pincode,
    foodType: foodType,
    email: email,
    // password: userPassword,
    // salt: salt,
    ownerName: ownerName,
    phone: phone,
    rating: 0,
    serviceAvailable: false,
    coverImages: [],
    lat: 0,
    lng: 0,
  });

  return res.json(createdVandor);
};

export const GetVendors = async (req: Request, res: Response) => {};

export const GetVendorByID = async (req: Request, res: Response) => {};
