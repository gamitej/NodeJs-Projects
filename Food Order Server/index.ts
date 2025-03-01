import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import { AdminRoute, VendorRoute } from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
