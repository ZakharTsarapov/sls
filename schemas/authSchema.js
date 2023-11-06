import Joi from "joi";

const userSchema = Joi.object({    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: Joi.string()
        .min(2)
        .max(30)
        .required(),
});

const refreshTokenSchema = Joi.object({
    refreshToken: Joi.string().required(),
  });

  export default {
    refreshTokenSchema,
    userSchema,
  };