import * as express from 'express'
import { controller, httpGet, interfaces } from 'inversify-express-utils';
import { inject } from 'inversify';
import { CommonTypes } from '../../common/common.types';
import { RequestContext } from '../../common/jwtservice/requests-context.service';
import { NotificationServiceInterface } from '../../common/interfaces/notification-service.interface';
import { NotificationTypes } from './notification.types';

@controller('/notification')
export class NotificationController implements interfaces.Controller {

    constructor(@inject(NotificationTypes.notificationService) private readonly notificationService: NotificationServiceInterface, @inject(CommonTypes.requestContext) private readonly requestContext: RequestContext) {}

    @httpGet('', CommonTypes.jwtAuthMiddleware)
    private async getNotificationsByUserId(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const userId = this.requestContext.getUserId();
        const notifications = await this.notificationService.getNotificationsByUserId(userId);
        res.send(notifications);
    }
}
