import { inject, injectable } from 'inversify';
import { ProfileServiceInterface } from '../../common/interfaces/profile-service.interface';
import { ProfileTypes } from './profile.types';
import { ProfileRepositoryInterface } from '../../common/interfaces/profile-repository.interface';
import { ProfileModel } from '../../common/models/profile.model';

@injectable()
export class ProfileService implements ProfileServiceInterface {
    constructor(@inject(ProfileTypes.profileRepository) private readonly profileRepository: ProfileRepositoryInterface) {}

    async getProfileByUserId(userId: string): Promise<ProfileModel> {
        return await this.profileRepository.getProfileByUserId(userId);
    }

    async addProfile(profile: ProfileModel): Promise<ProfileModel> {
        return await this.profileRepository.addProfile(profile);
    }

    async  updateProfileById(id: string, profile: ProfileModel): Promise<ProfileModel> {
        return await this.profileRepository.updateProfileById(id, profile);
    }

    async updateProfileByUserId(userId: string, profile: ProfileModel): Promise<ProfileModel> {
        return await this.profileRepository.updateProfileById(userId, profile);
    }
}
