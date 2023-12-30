export type NotificationModel = {
    id?: string,
    createdAtUtc?: Date
    updatedAtUtc?: Date
    createdById?: string,
    updatedById?: string,
    isDeleted?: boolean,
    userId?: string,
    sentById?: string,
    postId?: string,
    expiresOn?: Date,
    scheduledAt?: Date,
    searchCode?: string,
}
