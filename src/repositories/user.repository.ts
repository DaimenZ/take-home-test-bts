import { Users } from "@prisma/client";
import { HttpException } from "../middlewares/error.middleware";
import logger from "../logs/logger";
import { database } from "../config/database";

class UserRepository {
  static async findByUsername(username: string): Promise<Users | null> {
    try {
      const user = await database.users.findUnique({
        where: {
          username,
        },
      });

      return user;
    } catch (error) {
      logger.error(
        `[Database Error] - [UserRepository] - [findByUsername]: ${error}`
      );
      throw new HttpException(500, "Database Error");
    }
  }
}

export default UserRepository;
