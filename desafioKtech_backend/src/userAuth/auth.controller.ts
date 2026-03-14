import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response) {

    const { email, password, role } = req.body;

    const result = await this.authService.login(email, password, role);

    return res.status(200).json(result);
  }
}