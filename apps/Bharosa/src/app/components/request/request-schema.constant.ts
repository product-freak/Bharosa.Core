import Joi from "joi";

export const createRequestSchema = Joi.object().keys({
    requestedById: Joi.string().required(),
    requestedTo: Joi.string().required(),
    postId: Joi.string().required(),
});

