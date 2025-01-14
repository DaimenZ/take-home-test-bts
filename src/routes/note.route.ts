import { Router } from "express";
import { Routes } from "../interface/routes.interface";
import NoteController from "../controllers/note.controller";
import { authenticateToken } from "../middlewares/auth.middleware";

class NoteRoute implements Routes {
  public router = Router();
  public noteController = new NoteController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/checklist",
      authenticateToken,
      this.noteController.getAllChecklists
    );
  }
}

export default NoteRoute;
