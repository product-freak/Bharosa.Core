import { RoleTypeEnum } from "../enums/role-type.enum";
import { UserTypeEnum } from "../enums/user-type.enum";

export type AccountUserModel = {
    id?: string
    createdAtUtc?: Date
    updatedAtUtc?: Date
    isDeleted?: boolean
    username?: string
    password?: string
    phoneNumber?: string
    otpSentToMobile?: string
    countryCode?: string
    accountId?: string
    firstname?: string
    lastname?: string
    email?: string
    dob?: Date
    role?: RoleTypeEnum,
    userType?: UserTypeEnum
};
