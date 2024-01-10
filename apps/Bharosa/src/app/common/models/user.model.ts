import { UserTypeEnum } from "../enums/user-type.enum"

export type UserModel = {
    id?: string
    createdAtUtc?: Date
    updatedAtUtc?: Date
    isDeleted?: boolean
    accountId?: string
    userType?: UserTypeEnum
    isOnboardingCompleted?: boolean
}
