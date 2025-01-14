import { NextFunction, Request, Response } from "express";
import NoteService from "../services/note.service";
import { RequestWithUser } from "../interface/auth.interface";

class NoteController {
  private noteService;

  constructor() {
    this.noteService = new NoteService();
  }

  public getAllChecklists = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user_id = req.user_id!;

      const response = await this.noteService.getAllChecklists(user_id);

      res.status(200).json({
        success: true,
        message: "Successfully retrieved checklists",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  };

  public createChecklist = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user_id = req.user_id!;

      await this.noteService.createChecklist(user_id, req.body);

      res.status(201).json({
        success: true,
        message: "Successfully created checklist",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default NoteController;
