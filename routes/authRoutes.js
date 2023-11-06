import express from "express";
import authCtrl from "../controllers/auth.js"

const authRouter = express.Router();

authRouter.post("/singUp", authCtrl.singup)