import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { AuthServiceInterface } from '../../common/interfaces/auth-service.interface'
import { AccountTypes } from './account.types'
import { AccountModel } from '../../common/models/account.model'
import { AuthTokenModel } from '../../common/models/auth-token.model'
import { UserModel } from '../../common/models/user.model'
import { AccountUserModel } from '../../common/models/account-user.model'
import { UserTypes } from '../user/user.types'
import { AuthRepositoryInterface } from '../../common/interfaces/auth-repository.interface'
import { ArgumentValidationError } from '../../common/errors/custom-errors/argument-validation.error'
import { ApiErrorCode } from 'apps/shared/payloads/error-codes'
import { CommonTypes } from '../../common/common.types'
import { JWTInterface } from '../../common/interfaces/jwt.interface'
import { UserServiceInterface } from '../../common/interfaces/user-service.interface'
import { HashProviderInterface } from '../../common/interfaces/hash-provider.interface'

@injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @inject(AccountTypes.authRepository) private authRepository: AuthRepositoryInterface,
    @inject(UserTypes.userService) private userService: UserServiceInterface,
    @inject(CommonTypes.jwt) private jwtService: JWTInterface,
    @inject(CommonTypes.hashProvider) private hashProvider: HashProviderInterface,
  ) {}

  async login(account: AccountModel): Promise<AuthTokenModel> {
    const accountInfo = await this.authRepository.findAccountByUsername(account.username);
    console.log(accountInfo);
    if (!accountInfo || accountInfo?.length === 0) {
      throw new ArgumentValidationError(
        `User is not found with given username ${account.username}`,
        account,
        ApiErrorCode.E0008,
      )
    }
    const isAccountVerified = await this.hashProvider.comparePasswordHash(account.password, accountInfo[0].password);
    if (!isAccountVerified) {
      throw new ArgumentValidationError(
        `Invalid Credentials`,
        account,
        ApiErrorCode.E0007,
      )
    } else {
      const user = await this.userService.getUserByAccountId(accountInfo[0]?.id);
      const accessToken = await this.jwtService.encode(user?.[0]);
      return { accessToken };
    }
  }

  async signUp(user: AccountUserModel): Promise<UserModel> {
    const accountByUserName = await this.authRepository.findAccountByUsername(user.email)
    if (accountByUserName.length > 0) {
      throw new ArgumentValidationError(
        `Account Already Exists with ${user.email} username`,
        user,
        ApiErrorCode.E0006,
      )
    }

    user.password = await this.hashProvider.generatePasswordHash(user.password);

    const accountInfo: AccountModel = {
      username: user.email?.toLowerCase(),
      password: user.password
    };


    const account = await this.authRepository.addAccount(accountInfo);
    
    const userInfo: UserModel = {
      accountId: account.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email?.toLowerCase(),
      phoneNumber: user.phoneNumber
    };

    return await this.userService.addUser(userInfo);
  }

}
