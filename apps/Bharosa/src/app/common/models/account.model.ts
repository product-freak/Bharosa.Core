import { LoginMethodEnum } from "../enums/login-method.enum";
import { RoleTypeEnum } from "../enums/role-type.enum";

export type AccountModel = {
    id?: string
    createdAtUtc?: Date
    updatedAtUtc?: Date
    createdById?: string
    updatedById?: string
    isDeleted?: boolean
    username: string
    password: string
    phoneNumber?: string
    otpSentToMobile?: string
    countryCode?: string
    role?: RoleTypeEnum
    loginProvider?: LoginMethodEnum
};
