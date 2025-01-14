import { Router } from "express";
import { Routes } from "../interface/routes.interface";
import NoteController from "../controllers/note.controller";
import { authenticateToken } from "../middlewares/auth.middleware";
import validate from "../middlewares/validation.middleware";
import noteSchemas from "../validators/note.validation";

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
    this.router.post(
      "/checklist",
      authenticateToken,
      validate(noteSchemas.createChecklist),
      this.noteController.createChecklist
    );
    this.router.delete(
      "/checklist/:checklistId",
      authenticateToken,
      validate(noteSchemas.checklistId, "params"),
      this.noteController.deleteChecklist
    );
  }
}

export default NoteRoute;
