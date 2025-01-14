import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { LoginDTO, RegisterDTO } from "../interface/auth.interface";
import UserRepository from "../repositories/user.repository";
import { HttpException } from "../middlewares/error.middleware";
import e from "express";

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

    const token = jwt.sign({ user_id: user.id }, tokenSecret, {
      expiresIn: "12h",
    });

    return { token };
  }

  public async register(data: RegisterDTO): Promise<void> {
    const { username, email, password } = data;

    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      throw new HttpException(409, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    return;
  }
}

export default AuthService;
