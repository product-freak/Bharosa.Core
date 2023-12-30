import { inject, injectable } from 'inversify';
import { NotificationTypes } from './notification.types';
import { PostRepositoryInterface } from '../../common/interfaces/post-repository.interface';
import { NotificationServiceInterface } from '../../common/interfaces/notification-service.interface';
import { NotificationModel } from '../../common/models/notification.model';
import { NotificationRepositoryInterface } from '../../common/interfaces/notification-repository.interface';

@injectable()
export class NotificationService implements NotificationServiceInterface {

    constructor(@inject(NotificationTypes.notificationRepository) private readonly notificationRepository: NotificationRepositoryInterface) {}

    async getNotificationsByUserId(userId: string): Promise<NotificationModel[]> {
        return await this.notificationRepository.getNotificationsByUserId(userId);
    }
}
