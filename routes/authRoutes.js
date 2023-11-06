import express from "express";
import authCtrl from "../controllers/auth.js"
import authSchema from "../schemas/authSchema.js";
import { validateBody } from '../decorators/index.js'


const authRouter = express.Router();

authRouter.post("/singup", validateBody(authSchema.userSchema), authCtrl.singup)
authRouter.post("/singin", validateBody(authSchema.userSchema), authCtrl.singin)
authRouter.post("/refresh", validateBody(authSchema.refreshTokenSchema), authCtrl.refresh)

export default authRouter;