export type AccountModel = {
    id?: string
    createdAtUtc?: Date
    updatedAtUtc?: Date
    isDeleted?: boolean
    username: string
    password: string
    phoneNumber?: string
    otpSentToMobile?: string
    countryCode?: string
};
