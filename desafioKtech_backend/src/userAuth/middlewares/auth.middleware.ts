import { Request, Response, NextFunction } from "express";
import { jwtConfig } from "../../config/jwt";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const [, token] = authHeader.split(" ");

  try {

    const decoded = jwt.verify(token, jwtConfig.secret);

    const { id } = decoded as TokenPayload;

    req.userId = id;

    return next();

  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }

}