import { Checklist } from "@prisma/client";
import ChecklistRepository from "../repositories/checklist.repository";

class NoteService {
  public async getAllChecklists(userId: string): Promise<Checklist[]> {
    const checklists = await ChecklistRepository.findAll(userId);

    return checklists;
  }
}

export default NoteService;
