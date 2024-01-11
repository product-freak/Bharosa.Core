import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { DataStore } from '../../common/data/datastore'
import { UserRepositoryInterface } from '../../common/interfaces/user-repository.interface'
import { UserModel } from '../../common/models/user.model'
import { Prisma } from '@prisma/client'

@injectable()
export class UserRepository implements UserRepositoryInterface {
  protected client

  constructor(@inject('DataStore') protected store: DataStore) {
    this.client = this.store.getClient()
  }

  async addUser(user: UserModel): Promise<UserModel> {
    const result = await this.client.user?.create({
      data: user as Prisma.UserCreateInput
    })
    return result as UserModel
  }

  async getUserById(id: string): Promise<UserModel> {
    const result = await this.client.user?.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    })
    return result as UserModel
  }

  async getUserByAccountId(accountId: string): Promise<UserModel> {
    const result = await this.client.user?.findFirst({
      where: {
        accountId,
        isDeleted: false,
      },
    })
    return result as UserModel
  }
  
  async getUsers(): Promise<UserModel[]> {
    const result = await this.client.user?.findMany({
      where: {
        isDeleted: false,
      },
    })
    return (result ? result : []) as UserModel[]
  }

  async updateUserById(id: string, user: UserModel): Promise<UserModel> {
    const result = await this.client.user?.update({
      data: user,
      where: {
        id
      }
    })
    return result as UserModel;
  }

}
