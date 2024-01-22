import { inject, injectable } from 'inversify';
import { ProfileRepositoryInterface } from '../../common/interfaces/profile-repository.interface';
import { DataStore } from '../../common/data/datastore';
import { ProfileModel } from '../../common/models/profile.model';

@injectable()
export class ProfileRepository implements ProfileRepositoryInterface {
    protected client;

    constructor(@inject('DataStore') protected store: DataStore) {
        this.client = this.store.getClient();
    }

    async getProfileByUserId(userId: string): Promise<ProfileModel> {
        const result = await this.client?.profile?.findFirst({
            where: {
                userId,
                isDeleted: false
            }
        });
        return result as ProfileModel;
    }

    async addProfile(profile: ProfileModel): Promise<ProfileModel> {
        const result = await this.client?.profile?.create({data: profile});
        return result as ProfileModel;
    }

    async updateProfileById(id: string, profile: ProfileModel): Promise<ProfileModel> {
        const result = await this.client?.profile?.update({data: profile, where: {
            id: id
        }});
        return result as ProfileModel;
    }

    async updateProfileByUserId(userId: string, profile: ProfileModel): Promise<ProfileModel> {
        const result = await this.client?.profile?.update({data: profile, where: {
            userId
        }});
        return result as ProfileModel;
    }
}


