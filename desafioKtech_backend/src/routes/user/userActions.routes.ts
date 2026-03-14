import { Router } from "express";
import { UserController } from "../../user/user.controller";
import { validate } from "../../user/middlewares/validateUser.middleware";
import { createUserSchema, updateUserSchema } from "../../user/user.schema";
import { authMiddleware } from "../../userAuth/middlewares/auth.middleware";

const userActions = Router();
const userController = new UserController();

userActions.post(
  "/register",
  validate(createUserSchema),
  userController.create
);

userActions.patch(
  "/update",
  authMiddleware,
  validate(updateUserSchema),
  userController.update
);

userActions.get(
  "/getUser/:id",
  authMiddleware,
  userController.findById
);

userActions.get(
  "/getUsers",
  authMiddleware,
  userController.findAll
);

userActions.delete(
  "/delete",
  authMiddleware,
  userController.delete
);

export { userActions };