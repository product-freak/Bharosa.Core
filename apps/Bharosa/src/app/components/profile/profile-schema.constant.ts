import Joi from "joi";
import { SkillTypeEnum } from "../../common/enums/skill-type.enum";

export const createProfileSchema = Joi.object().keys({
    userId: Joi.string().required(),
    email: Joi.string().optional(),
    gender: Joi.string().optional(),
    aadharNumber: Joi.string().optional(),
    panNumber: Joi.string().optional(),
    dob: Joi.string().optional(),
    experienceYears: Joi.number().optional(),
    experienceMonths: Joi.number().optional(),
    skills: Joi.array().items(Joi.valid(...Object.values(SkillTypeEnum))).optional(),
    qualification: Joi.string().optional(),
    profileImage: Joi.string().optional(),
    locations: Joi.array().items(Joi.string()).optional(),
    currentlyWorkingIn: Joi.string().optional(),
    pincode: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    country: Joi.string().optional(),
    languagesKnown: Joi.array().items(Joi.string()).optional()
});

export const updateProfileSchema = Joi.object().keys({
    email: Joi.string().optional(),
    gender: Joi.string().optional(),
    aadharNumber: Joi.string().optional(),
    panNumber: Joi.string().optional(),
    dob: Joi.string().optional(),
    experienceYears: Joi.number().optional(),
    experienceMonths: Joi.number().optional(),
    skills: Joi.array().items(Joi.valid(...Object.values(SkillTypeEnum))).optional(),
    qualification: Joi.string().optional(),
    profileImage: Joi.string().optional(),
    locations: Joi.array().items(Joi.string()).optional(),
    currentlyWorkingIn: Joi.string().optional(),
    pincode: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    country: Joi.string().optional(),
    languagesKnown: Joi.array().items(Joi.string()).optional()
});

