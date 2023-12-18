import { injectable } from 'inversify'
import 'reflect-metadata'
import { CommonContainer } from '../../common/container'
import { AccountTypes } from './account.types'
import { AuthRepositoryInterface } from '../../common/interfaces/auth-repository.interface'
import { AuthServiceInterface } from '../../common/interfaces/auth-service.interface'
import { AuthController } from './auth.controller'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'

@injectable()
export default class AccountBootstrapper {
  public static initialize() {
    CommonContainer.bind<AuthRepositoryInterface>(AccountTypes.authRepository).to(
      AuthRepository,
    )
    CommonContainer.bind<AuthServiceInterface>(AccountTypes.authService).to(
      AuthService,
    )
    CommonContainer.bind<AuthController>(AccountTypes.authController).to(AuthController)
  }
}
