import urlSchema from "../schemas/urlSchema.js";

const validateParams = async (req, res, next) => {
    const { error } = urlSchema.validate(req.body)

    if(error) {
        return res.status(400).json({
            error: "mistake in : longUrl"
        })
    }
    next()
}

export default validateParams;