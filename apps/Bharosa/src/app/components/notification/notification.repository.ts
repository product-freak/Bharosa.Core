import { inject, injectable } from 'inversify';
import { DataStore } from '../../common/data/datastore';
import { NotificationModel } from '../../common/models/notification.model';
import { NotificationRepositoryInterface } from '../../common/interfaces/notification-repository.interface';

@injectable()
export class NotificationRepository implements NotificationRepositoryInterface {
    protected client;

    constructor(@inject('DataStore') protected store: DataStore) {
        this.client = this.store.getClient();
    }
    

    async getNotificationsByUserId(userId: string): Promise<NotificationModel[]> {
        const result = await this.client?.notification?.findMany({
            where: {
                userId,
                isDeleted: false
            }
        });
        return result ? result : [];
    }
}
