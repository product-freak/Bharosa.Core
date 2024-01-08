import { AccountUserModel } from "../models/account-user.model"
import { AccountModel } from "../models/account.model"
import { AuthTokenModel } from "../models/auth-token.model"
import { UserModel } from "../models/user.model"

export interface AuthServiceInterface {
  login(account: AccountModel): Promise<AuthTokenModel | AccountModel>
  signUp(user: AccountUserModel): Promise<UserModel>
  verifyOtp(account: AccountModel): Promise<AuthTokenModel>
}
