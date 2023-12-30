import Joi from "joi";
import { SkillTypeEnum } from "../../common/enums/skill-type.enum";
import { EmploymentTypeEnum } from "../../common/enums/employment-type.enum";
import { StatusTypeEnum } from "../../common/enums/status.enum";

export const createPostSchema = Joi.object().keys({
    userId: Joi.string().required(),
    sentById: Joi.string().required(),
    postId: Joi.string().required(),
    expiresOn: Joi.string().required(),
    scheduledAt: Joi.string().required(),
    searchCode: Joi.string().required(),
});
