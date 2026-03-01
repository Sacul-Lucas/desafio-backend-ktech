import { Schema, model, Document } from "mongoose"

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user"
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },
    { timestamps: true }
)

export const User = model<IUser>("User", userSchema)