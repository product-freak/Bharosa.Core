export type AccountUserModel = {
    id: string
    createdAtUtc: Date
    updatedAtUtc: Date
    isDeleted: boolean
    username: string
    password: string
    phoneNumber: string
    otpSentToMobile: string
    countryCode: string
    accountId: string
    firstname: string
    lastname: string
    email: string
};