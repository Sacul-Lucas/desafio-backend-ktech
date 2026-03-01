import { Router } from "express";
import { userActions } from "./user/userActions.routes";

const router = Router();

router.use('/users', userActions);

export { router }