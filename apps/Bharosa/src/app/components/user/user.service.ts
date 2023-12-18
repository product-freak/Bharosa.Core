import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { UserServiceInterface } from '../../common/interfaces/user-service.interface'
import { UserTypes } from './user.types';
import { UserRepository } from './user.repository';
import { UserModel } from '../../common/models/user.model';
import { UserRepositoryInterface } from '../../common/interfaces/user-repository.interface';

@injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @inject(UserTypes.userRepository) private userRepository: UserRepositoryInterface
  ) {}


  async addUser(user: UserModel): Promise<UserModel> {
    const users = await this.userRepository.addUser(user);
    return users;
  }

  async getUserById(id: string): Promise<UserModel> {
    const user = await this.userRepository.getUserById(id);
    return user;
  }

  async getUserByAccountId(accountId: string): Promise<UserModel[]> {
    const user = await this.userRepository.getUserByAccountId(accountId);
    return user;
  }

  async getUsers(): Promise<UserModel[]> {
    const users = await this.userRepository.getUsers();
    return users;
  }

}
