import express from "express"
import urlCtrl from "../controllers/controllers.js"
import validateParams from "../middlewares/validate.js"

const shortRoute = express.Router()

shortRoute.post("/", validateParams, urlCtrl.urlController)
shortRoute.get("/:shortUrl", urlCtrl.showUrl)

export default shortRoute;

