import { Checklist } from "@prisma/client";
import { HttpException } from "../middlewares/error.middleware";
import { database } from "../config/database";
import logger from "../logs/logger";

class ChecklistRepository {
  static async findAll(userId: string): Promise<Checklist[]> {
    try {
      const checklists = await database.checklist.findMany({
        where: {
          userId,
        },
      });

      return checklists;
    } catch (error) {
      logger.error(
        `[Database Error] - [ChecklistRepository] - [findAll]: ${error}`
      );
      throw new HttpException(500, "Database Error");
    }
  }

  static async findById(id: string): Promise<Checklist | null> {
    try {
      const checklist = await database.checklist.findUnique({
        where: {
          id,
        },
      });

      return checklist;
    } catch (error) {
      logger.error(
        `[Database Error] - [ChecklistRepository] - [findById]: ${error}`
      );
      throw new HttpException(500, "Database Error");
    }
  }

  static async create(
    userId: string,
    data: {
      name: string;
    }
  ): Promise<Checklist> {
    try {
      const checklist = await database.checklist.create({
        data: {
          ...data,
          userId,
        },
      });

      return checklist;
    } catch (error) {
      logger.error(
        `[Database Error] - [ChecklistRepository] - [create]: ${error}`
      );
      throw new HttpException(500, "Database Error");
    }
  }

  static async delete(id: string): Promise<void> {
    try {
      await database.checklist.delete({
        where: {
          id,
        },
      });

      return;
    } catch (error) {
      logger.error(
        `[Database Error] - [ChecklistRepository] - [delete]: ${error}`
      );
      throw new HttpException(500, "Database Error");
    }
  }
}

export default ChecklistRepository;
