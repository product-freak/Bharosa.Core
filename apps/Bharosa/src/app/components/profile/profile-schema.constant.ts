import Joi from "joi";
import { SkillTypeEnum } from "../../common/enums/skill-type.enum";

export const createProfileSchema = Joi.object().keys({
    userId: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    countryCode: Joi.string().required(),
    email: Joi.string().optional(),
    gender: Joi.string().required(),
    aadharNumber: Joi.string().required(),
    panNumber: Joi.string().optional(),
    dob: Joi.string().required(),
    experienceYears: Joi.number().optional(),
    experienceMonths: Joi.number().optional(),
    companiesWorkedAt: Joi.string().optional(),
    currentCtc: Joi.number().optional(),
    skills: Joi.valid(...Object.values(SkillTypeEnum)),
    education: Joi.string().optional(),
    profileImage: Joi.string().optional(),
    locations: Joi.string().required(),
    currentlyWorkingIn: Joi.string().optional(),
    address: Joi.string().required(),
    adddress2: Joi.string().optional(),
    pincode: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required()
});