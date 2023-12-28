import Joi from "joi";
import { SkillTypeEnum } from "../../common/enums/skill-type.enum";
import { EmploymentTypeEnum } from "../../common/enums/employment-type.enum";
import { StatusTypeEnum } from "../../common/enums/status.enum";

export const createPostSchema = Joi.object().keys({
    userId: Joi.string().required(),
    companyName: Joi.string().required(),
    companyId: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    postById: Joi.string().required(),
    location: Joi.string().optional(),
    department: Joi.string().required(),
    skills: Joi.array().items(Joi.valid(...Object.values(SkillTypeEnum))).optional(),
    experience: Joi.string().required(),
    employmentType: Joi.string().valid(...Object.values(EmploymentTypeEnum)),
    education: Joi.string().optional(),
    salary: Joi.string().required(),
    status: Joi.string().valid(...Object.values(StatusTypeEnum)),
    noOfVacancies: Joi.string().required(),
    imageUrl: Joi.string().required()
});

