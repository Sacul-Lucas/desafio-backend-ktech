import { Router } from "express";
import { UserController } from "../../user/user.controller";
import { validate } from "../../user/middlewares/validateUser.middleware";
import { createUserSchema, updateUserSchema } from "../../user/user.schema";

const userActions = Router();
const userController = new UserController();

userActions.post(
    '/register', 
    validate(createUserSchema),
    userController.create
);

userActions.patch(
    '/update',
    validate(updateUserSchema),
    userController.update
)

userActions.get(
    '/getUser/:id',
    userController.findById
)

userActions.get(
    '/getUsers',
    userController.findAll
)

userActions.delete(
    '/delete',
    userController.delete
)

export { userActions };