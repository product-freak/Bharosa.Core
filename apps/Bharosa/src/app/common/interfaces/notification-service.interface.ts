import { NotificationModel } from "../models/notification.model"

export interface NotificationServiceInterface {
    getNotificationsByUserId(userId: string): Promise<NotificationModel[]>
}
