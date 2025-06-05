import { Request, Response } from "express";
import { InternalServerError } from "../utils/app.error";

export const pingHandler = (req: Request, res: Response): void => {
  try {
    console.log(req.body);
    res.send("pong");
  } catch (error) {
    throw new InternalServerError("Something went wrong");
  }
};
