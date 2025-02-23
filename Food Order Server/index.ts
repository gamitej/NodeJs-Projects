import express, { Request, Response } from "express";

const app = express();

app.use("/", (_req: Request, res: Response): any => {
  return res.json("Hi from backend server");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
