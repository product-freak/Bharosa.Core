import { NotificationModel } from "../models/notification.model";

export interface NotificationRepositoryInterface {
    getNotificationsByUserId(userId: string): Promise<NotificationModel[]>
}
