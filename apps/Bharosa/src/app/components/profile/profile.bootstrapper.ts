import { injectable } from "inversify"
import { CommonContainer } from "../../common/container"
import { ProfileRepositoryInterface } from "../../common/interfaces/profile-repository.interface"
import { ProfileServiceInterface } from "../../common/interfaces/profile-service.interfacee"
import { ProfileController } from "./profile.controller"
import { ProfileRepository } from "./profile.repository"
import { ProfileService } from "./profile.service"
import { ProfileTypes } from "./profile.types"

@injectable()
export default class ProfileBootstrapper {
    public static initialize() {
        CommonContainer.bind<ProfileRepositoryInterface>(ProfileTypes.profileRepository).to(
          ProfileRepository,
        )
        CommonContainer.bind<ProfileServiceInterface>(ProfileTypes.profileService).to(
          ProfileService,
        )
        CommonContainer.bind<ProfileController>(ProfileTypes.profileController).to(ProfileController)
      }
}