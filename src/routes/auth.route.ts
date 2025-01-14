import { Router } from "express";
import { Routes } from "../interface/routes.interface";
import AuthController from "../controllers/auth.controller";
import validate from "../middlewares/validation.middleware";
import authSchemas from "../validators/auth.validation";

class AuthRoute implements Routes {
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/login",
      validate(authSchemas.login),
      this.authController.login
    );
  }
}

export default AuthRoute;
