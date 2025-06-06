import { NextFunction, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
export const attachCorrelationIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = uuidV4();
  req.headers["x-correlation-id"] = correlationId;
  next();
};
