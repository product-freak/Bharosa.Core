import { injectable } from 'inversify'
import 'reflect-metadata'
import { CommonContainer } from '../../common/container'
import { UserRepositoryInterface } from '../../common/interfaces/user-repository.interface'
import { UserRepository } from './user.repository'
import { UserServiceInterface } from '../../common/interfaces/user-service.interface'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserTypes } from './user.types'

@injectable()
export default class UserBootstrapper {
  public static initialize() {
    CommonContainer.bind<UserRepositoryInterface>(UserTypes.userRepository).to(
      UserRepository,
    )
    CommonContainer.bind<UserServiceInterface>(UserTypes.userService).to(
      UserService,
    )
    CommonContainer.bind<UserController>(UserTypes.userController).to(UserController)
  }
}
