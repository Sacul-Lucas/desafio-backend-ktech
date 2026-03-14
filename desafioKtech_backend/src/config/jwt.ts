import { SignOptions } from "jsonwebtoken";

export const jwtConfig: { 
  secret: string,
  expiresIn: SignOptions["expiresIn"]
} = {
  secret: process.env.JWT_SECRET || "supersecret",
  expiresIn: "1d"
};