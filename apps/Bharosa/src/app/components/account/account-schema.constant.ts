import Joi from "joi";

export const loginSchema = Joi.object().keys({
      phoneNumber: Joi.alternatives().conditional('username', {is: Joi.string().optional(), then: Joi.string().regex(/^\d{3}\d{3}\d{4}$/).required()}),
      username: Joi.alternatives().conditional('phoneNumber', {is: Joi.string().optional(), then: Joi.string().email().required()}),
      password: Joi.alternatives().conditional('username', {is: Joi.string().required(), then: Joi.string().required()}),
    });

