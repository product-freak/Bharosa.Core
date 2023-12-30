import Joi from "joi";

export const createCompanySchema = Joi.object().keys({
    userId: Joi.string().required(),
    companyName: Joi.string().required(),
    gstNumber: Joi.string().required(),
    foundedAtUtc: Joi.date().required(),
    address: Joi.string().required(),
    address2: Joi.string().optional(),
    pincode: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required()
});

