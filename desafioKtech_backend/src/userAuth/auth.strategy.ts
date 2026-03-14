import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt";

export class JwtStrategy {

  static verify(token: string) {

    try {
      const decoded = jwt.verify(token, jwtConfig.secret);
      return decoded;
    } catch {
      throw new Error("Invalid token");
    }

  }

}