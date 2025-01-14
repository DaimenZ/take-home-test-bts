import { Request } from "express";

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  username: string;
  email: string;
  password: string;
}

export interface RequestWithUser extends Request {
  user_id?: string;
}

export interface DataStoredInToken {
  user_id: string;
}
