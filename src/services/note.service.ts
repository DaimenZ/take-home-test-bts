import { Checklist } from "@prisma/client";
import ChecklistRepository from "../repositories/checklist.repository";
import { ChecklistDTO } from "../interface/checklist.interface";

class NoteService {
  public async getAllChecklists(userId: string): Promise<Checklist[]> {
    const checklists = await ChecklistRepository.findAll(userId);

    return checklists;
  }

  public async createChecklist(
    userId: string,
    data: ChecklistDTO
  ): Promise<void> {
    const { name } = data;

    await ChecklistRepository.create(userId, { name });

    return;
  }
}

export default NoteService;
