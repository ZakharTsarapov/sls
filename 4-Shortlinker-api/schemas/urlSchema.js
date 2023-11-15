import Joi from "joi";

const urlSchema = Joi.object({
    longUrl: Joi.string().uri().required(),
});

export default urlSchema