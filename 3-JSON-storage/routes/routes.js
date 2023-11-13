import express from "express";
import { storeFile, getJsonFile } from "../controllers/controllers.js"

const jsonRouter = express.Router()

jsonRouter.put("/:path", storeFile)
jsonRouter.get("/:path", getJsonFile)

export default jsonRouter;