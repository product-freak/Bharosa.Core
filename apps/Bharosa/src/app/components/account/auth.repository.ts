import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { DataStore } from '../../common/data/datastore'
import { AuthRepositoryInterface } from '../../common/interfaces/auth-repository.interface'
import { AccountModel } from '../../common/models/account.model'

@injectable()
export class AuthRepository implements AuthRepositoryInterface {
  protected client

  constructor(@inject('DataStore') protected store: DataStore) {
    this.client = this.store.getClient()
  }

  async getAccountDetails(): Promise<AccountModel[]> {
    const result = await this.client.account?.findMany({
      where: {
        isDeleted: false,
      },
    })
    return result as AccountModel[]
  }

  async addAccount(account: AccountModel): Promise<AccountModel> {
    const result = await this.client.account?.create({
      data: account
    })
    return result as AccountModel
  }

  async findAccountById(id: string): Promise<AccountModel> {
    const result = await this.client.account?.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    })
    return result as AccountModel
  }

  async findAccountByUsername(username: string): Promise<AccountModel> {
    const result = await this.client?.account?.findFirst({
      where: {
        username,
        isDeleted: false,
      },
    })
    return result as AccountModel
  }

  async findAccountByPhoneNumber(phoneNumber: string): Promise<AccountModel> {
    const result = await this.client?.account?.findFirst({
      where: {
        phoneNumber,
        isDeleted: false,
      },
    })
    return result as AccountModel
  }
}
