import { Request, Response, NextFunction } from "express";
import { HttpException } from "../common/http-exception";

export default function errorHandler(error: HttpException, req: Request, res: Response, next: NextFunction) {
  
  const errorObj = {
    message: error.message || "Something went wrong.",
    status_code: error.status_code || 100,
  };
  res.status(error.status || 500).send(errorObj);
}