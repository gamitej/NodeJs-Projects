import express from "express";

import { AdminRoute, VandorRoute } from "./routes";

const app = express();

app.use("/admin", AdminRoute);
app.use("/vandour", VandorRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
