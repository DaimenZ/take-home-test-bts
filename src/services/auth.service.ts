import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { LoginDTO } from "../interface/auth.interface";
import UserRepository from "../repositories/user.repository";
import { HttpException } from "../middlewares/error.middleware";

dotenv.config();

const tokenSecret = process.env.JWT_SECRET || "test_secret";

class AuthService {
  public async login(data: LoginDTO): Promise<{ token: string }> {
    const { username, password } = data;

    const user = await UserRepository.findByUsername(username);
    if (!user) {
      throw new HttpException(401, "Invalid credentials");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new HttpException(401, "Invalid credentials");
    }

    const token = jwt.sign({ user_email: user.email }, tokenSecret, {
      expiresIn: "12h",
    });

    return { token };
  }
}

export default AuthService;
