import { ArgumentValidationError } from "../common/errors/custom-errors/argument-validation.error";
const Joi = require('joi');

const joiValidateMiddleware = (schema) => { 
    return (req, res, next) => { 
    const data = req.body;
    const { error } = schema.validate(data, { abortEarly: false }); 
    const valid = error == null;
    if (valid) { 
      next(); 
    } else {
      throw new ArgumentValidationError(error.message,
            data,
            error.message);
    } 
  };
};

export default joiValidateMiddleware;
  