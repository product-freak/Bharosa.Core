import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { UserServiceInterface } from '../../common/interfaces/user-service.interface'
import { UserTypes } from './user.types';
import { UserModel } from '../../common/models/user.model';
import { UserRepositoryInterface } from '../../common/interfaces/user-repository.interface';
import { ProfileServiceInterface } from '../../common/interfaces/profile-service.interfacee';
import { ProfileTypes } from '../profile/profile.types';

@injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @inject(UserTypes.userRepository) private userRepository: UserRepositoryInterface,
    @inject(ProfileTypes.profileRepository) private profileService: ProfileServiceInterface
  ) {}


  async addUser(user: UserModel): Promise<UserModel> {
    const userDetail = await this.userRepository.addUser(user);
    await this.profileService.addProfile({
      firstname: userDetail.firstname,
      lastname: userDetail.lastname,
      userId: userDetail.id
    });
    return userDetail;
  }

  async getUserById(id: string): Promise<UserModel> {
    const user = await this.userRepository.getUserById(id);
    return user;
  }

  async getUserByAccountId(accountId: string): Promise<UserModel> {
    const user = await this.userRepository.getUserByAccountId(accountId);
    return user;
  }

  async getUsers(): Promise<UserModel[]> {
    const users = await this.userRepository.getUsers();
    return users;
  }

  async updateUserById(id: string, user: UserModel): Promise<UserModel> {
    const users = await this.userRepository.updateUserById(id, user);
    return users;
  }

}
