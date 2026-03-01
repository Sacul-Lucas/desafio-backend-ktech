import { User, IUser } from "./user.model"
import bcrypt from "bcrypt"

export class UserService {
    async create(data: Partial<IUser>) {
        const emailExists = await User.findOne({ email: data.email });

        if (emailExists) {
            throw new Error("Email already in use")
        }

        const hashedPassword = await bcrypt.hash(data.password!, 10);

        const user = await User.create({
            ...data,
            password: hashedPassword,
        });

        return user;
    }

    async findAll() {
        return User.find().select("-password");
    }

    async findById(id: string) {
        const user = await User.findById(id).select("-password");

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }

    async update(id: string, data: Partial<IUser>) {
        const user = await User.findByIdAndUpdate(id, data, {
            new: true
        }).select("-password");

        if (!user) {
            throw new Error("User not found");
        }

        return user
    }

    async delete(id: string) {
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            throw new Error("User not found")
        }

        return
    }
}