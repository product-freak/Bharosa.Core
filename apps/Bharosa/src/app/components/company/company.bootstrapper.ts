import { injectable } from "inversify"
import { CommonContainer } from "../../common/container"
import { CompanyTypes } from "./company.types"
import { CompanyRepositoryInterface } from "../../common/interfaces/company-repository.interface"
import { CompanyRepository } from "./company.repository"
import { CompanyServiceInterface } from "../../common/interfaces/company-service.interface"
import { CompanyService } from "./company.service"
import { CompanyController } from "./company.controller"

@injectable()
export default class CompanyBootstrapper {
    public static initialize() {
      CommonContainer.bind<CompanyRepositoryInterface>(CompanyTypes.companyRepository).to(
        CompanyRepository,
      )
      CommonContainer.bind<CompanyServiceInterface>(CompanyTypes.companyService).to(
        CompanyService,
      )
      CommonContainer.bind<CompanyController>(CompanyTypes.companyController).to(CompanyController)
    }
}