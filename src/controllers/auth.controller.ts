import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";
import logger from "../logs/logger";

class AuthController {
  private authService;

  constructor() {
    this.authService = new AuthService();
  }

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const response = await this.authService.login(req.body);

      res.status(200).json({
        success: true,
        message: "Login Success",
        data: response,
      });
    } catch (error) {
      logger.error(`[AuthController] - [login]: ${error}`);
      next(error);
    }
  };
}

export default AuthController;
