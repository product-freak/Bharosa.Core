import { UserTypeEnum } from "../enums/user-type.enum"

export type UserModel = {
    id?: string
    createdAtUtc?: Date
    updatedAtUtc?: Date
    isDeleted?: boolean
    accountId?: string
    firstname?: string
    lastname?: string
    email?: string
    phoneNumber?: string
    profileImage?: string
    location?: string
    dob?: Date
    userType?: UserTypeEnum
    isOnboardingCompleted?: boolean
}
