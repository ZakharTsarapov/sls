import express from "express";
import authenticate from "../middlewares/authenticate.js";
import getCurrent from "../controllers/user.js";

const userRouter = express.Router()

userRouter.get('/current', authenticate, getCurrent)

export default userRouter;