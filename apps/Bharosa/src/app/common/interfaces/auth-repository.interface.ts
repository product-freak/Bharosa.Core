import { AccountModel } from "../models/account.model"

export interface AuthRepositoryInterface {
  getAccountDetails(): Promise<AccountModel[]>
  addAccount(account: AccountModel): Promise<AccountModel>
  findAccountById(id: string): Promise<AccountModel>
  findAccountByUsername(username: string): Promise<AccountModel>
  findAccountByPhoneNumber(phoneNumber: string): Promise<AccountModel>
}
