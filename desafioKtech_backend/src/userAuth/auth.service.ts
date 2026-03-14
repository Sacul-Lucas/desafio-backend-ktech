import { jwtConfig } from "../config/jwt";
import { User } from "../user/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export class AuthService {

  async login(email: string, password: string, _role: string) {

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id.toString() },
      jwtConfig.secret as string,
      { expiresIn: jwtConfig.expiresIn }
    );

    return {
      user: {
        id: user._id,
        role: user.role,
        email: user.email
      },
      token
    };
  }

}