import { injectable } from "inversify"
import { CommonContainer } from "../../common/container"
import { RequestController } from "./request.controller"
import { RequestRepository } from "./request.repository"
import { RequestService } from "./request.service"
import { RequestTypes } from "./request.types"
import { RequestRepositoryInterface } from "../../common/interfaces/request-repository.interface"
import { RequestServiceInterface } from "../../common/interfaces/request-service.interface"

@injectable()
export default class RequestBootstrapper {
    public static initialize() {
      CommonContainer.bind<RequestRepositoryInterface>(RequestTypes.requestRepository).to(
        RequestRepository,
      )
      CommonContainer.bind<RequestServiceInterface>(RequestTypes.requestService).to(
        RequestService,
      )
      CommonContainer.bind<RequestController>(RequestTypes.requestController).to(RequestController)
    }
}