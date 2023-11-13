import { getFile, writeFile} from "../services/services.js"

const storeFile = async (req, res, next) => {
    const { path } = req.params
    try {
        const addFile = await addFile(path)

        res.status(200).json({
            success: true,
            message: addFile
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: "bad request"
        })
    }
}

const getJsonFile = async (req, res, next) => {
    const { path } = req.params
    try{ 
        const data = await getFile(path)

        res.status(200).json({
            success: true,
            message: data ? data : "File is not exist"
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: "bad request"
        })
    }
}

export default {
    storeFile,
    getJsonFile
}