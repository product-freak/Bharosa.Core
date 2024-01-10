import Joi from "joi";
import { LoginMethodEnum } from "../../common/enums/login-method.enum";

export const loginSchema = Joi.object().keys({
      phoneNumber: Joi.alternatives().conditional('username', {is: Joi.string().optional(), then: Joi.string().regex(/^\d{3}\d{3}\d{4}$/).required()}),
      username: Joi.alternatives().conditional('phoneNumber', {is: Joi.string().optional(), then: Joi.string().email().required()}),
      password: Joi.alternatives().conditional('username', {is: Joi.string().required(), then: Joi.string().required()}),
      loginProvider: Joi.string().valid(...Object.values(LoginMethodEnum)),
    });

