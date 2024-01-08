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
import { LoginMethodEnum } from '../../common/enums/login-method.enum'

@injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @inject(AccountTypes.authRepository) private authRepository: AuthRepositoryInterface,
    @inject(UserTypes.userService) private userService: UserServiceInterface,
    @inject(CommonTypes.jwt) private jwtService: JWTInterface,
    @inject(CommonTypes.hashProvider) private hashProvider: HashProviderInterface,
  ) {}

  async login(account: AccountModel): Promise<AuthTokenModel | AccountModel> {
    let accountInfo;

    if (account.loginProvider === LoginMethodEnum.EMAIL_PASSWORD) {
      accountInfo = await this.authRepository.findAccountByUsername(account.username);
    } else if (account.loginProvider === LoginMethodEnum.MOBILE_OTP_PROVIDER) {
      accountInfo = await this.authRepository.findAccountByPhoneNumber(account.phoneNumber);
    }

    if (!accountInfo) {
      throw new ArgumentValidationError(
        `User is not found with given username ${account.username}`,
        account,
        ApiErrorCode.E0008,
      )
    }

    if (account.loginProvider === LoginMethodEnum.EMAIL_PASSWORD) {
      const isAccountVerified = await this.hashProvider.comparePasswordHash(account.password, accountInfo.password);
      if (!isAccountVerified) {
        throw new ArgumentValidationError(
          `Invalid Credentials`,
          account,
          ApiErrorCode.E0007,
        )
      }
      const user = await this.userService.getUserByAccountId(accountInfo?.id);
      const accessToken = await this.jwtService.encode(user);
      return { accessToken };
    } else if (account.loginProvider === LoginMethodEnum.MOBILE_OTP_PROVIDER) {
      return accountInfo;
    }

  }

  async signUp(user: AccountUserModel): Promise<UserModel> {
    const accountByUserName = await this.authRepository.findAccountByUsername(user.email)
    if (accountByUserName) {
      throw new ArgumentValidationError(
        `Account Already Exists with ${user.email} username`,
        user,
        ApiErrorCode.E0006,
      )
    }

    user.password = await this.hashProvider.generatePasswordHash(user.password);

    const accountInfo: AccountModel = {
      username: user.email?.toLowerCase(),
      password: user.password,
      phoneNumber: user.phoneNumber
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

  async verifyOtp(account: AccountModel): Promise<AuthTokenModel> {
    const accountInfo = await this.authRepository.findAccountByPhoneNumber(account.phoneNumber);
    
    const user = await this.userService.getUserByAccountId(accountInfo?.id);
    if (user) {
      const accessToken = await this.jwtService.encode(user);
      return { accessToken };
    } else {
      const user = {accountId: account.id};
      const accessToken = await this.jwtService.encode(user);
      return { accessToken };
    }
  }
}
