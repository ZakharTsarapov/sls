import express from "express";
import authCtrl from "../controllers/auth.js"

const authRouter = express.Router();

authRouter.post("/singup", authCtrl.singup)
authRouter.post("/singin", authCtrl.singin)
authRouter.post("/refresh", authCtrl.refresh)

export default authRouter;