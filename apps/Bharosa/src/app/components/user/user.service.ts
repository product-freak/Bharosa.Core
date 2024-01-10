import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { UserServiceInterface } from '../../common/interfaces/user-service.interface'
import { UserTypes } from './user.types';
import { UserModel } from '../../common/models/user.model';
import { UserRepositoryInterface } from '../../common/interfaces/user-repository.interface';
import { ProfileServiceInterface } from '../../common/interfaces/profile-service.interface';
import { ProfileTypes } from '../profile/profile.types';
import { AccountUserModel } from '../../common/models/account-user.model';

@injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @inject(UserTypes.userRepository) private userRepository: UserRepositoryInterface,
    @inject(ProfileTypes.profileRepository) private profileService: ProfileServiceInterface
  ) {}


  async addUser(user: AccountUserModel): Promise<UserModel> {
    const userDetail = await this.userRepository.addUser({accountId: user.accountId});
    await this.profileService.addProfile({
      firstname: user.firstname,
      lastname: user.lastname,
      phoneNumber: user.phoneNumber,
      countryCode: user.countryCode,
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
    const userDetail = await this.userRepository.updateUserById(id, user);
    return userDetail;
  }

}
