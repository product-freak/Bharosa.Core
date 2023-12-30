import { injectable } from "inversify"
import { CommonContainer } from "../../common/container"
import { NotificationController } from "./notification.controller"
import { NotificationRepository } from "./notification.repository"
import { NotificationRepositoryInterface } from "../../common/interfaces/notification-repository.interface"
import { NotificationService } from "./notification.service"
import { NotificationServiceInterface } from "../../common/interfaces/notification-service.interface"
import { NotificationTypes } from "./notification.types"

@injectable()
export default class NotificationBootstrapper {
    public static initialize() {
      CommonContainer.bind<NotificationRepositoryInterface>(NotificationTypes.notificationRepository).to(
        NotificationRepository,
      )
      CommonContainer.bind<NotificationServiceInterface>(NotificationTypes.notificationService).to(
        NotificationService,
      )
      CommonContainer.bind<NotificationController>(NotificationTypes.notificationController).to(NotificationController)
    }
}