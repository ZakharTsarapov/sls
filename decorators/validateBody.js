const validateBody = schema => {
    const func = (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (error) {
        throw new Error(400, error.message);
      }
      next();
    };
    return func;
  };
  
  export default validateBody;