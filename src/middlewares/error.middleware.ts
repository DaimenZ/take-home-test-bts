import { NextFunction, Request, Response } from "express";

export class HttpException extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Something went wrong";

    res.status(statusCode).json({ success: false, message, data: null });
  } catch (error) {
    next(error);
  }
};
