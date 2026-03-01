import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";

const userService = new UserService();

export class UserController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body) {
                return res.status(204).json({success: false, data: "Request body empty"})
            }

            const user = await userService.create(req.body);
            return res.status(201).json({success: true, data: user})
        } catch (error) {
            next(error)
        }
    }

    async findAll(_req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.findAll();

            if (!users) {
                return res.status(404).json({success: false, data: "Users not found"})
            }

            return res.status(200).json({success: true, data: users});
        } catch (error) {
            next(error);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.params.id.toString()) {
                return res.status(404).json({success: false, data: "User id not found"})
            }

            const user = await userService.findById(req.params.id.toString());
            return res.status(200).json({success: true, data: user});
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.params.id.toString()) {
                return res.status(404).json({success: false, data: "User id not found"})
            }

            const user = await userService.update(req.params.id.toString(), req.body);

            if (!user) {
                return res.status(404).json({success: false, data: "Failed to update user"})
            }

            return res.status(200).json({success: true, data: user});
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.params.id.toString()) {
                return res.status(404).json({success: false, data: "User id not found"})
            }

            await userService.delete(req.params.id.toString());
            return res.status(204).send({success: true});
        } catch (error) {
            next(error);
        }
    }
}