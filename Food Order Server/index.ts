import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// routes
import { AdminRoute, VendorRoute } from "./routes";
import { MONGO_URI } from "./config";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("Error connecting to Mongoose", err);
    process.exit(1);
  }
};

connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
