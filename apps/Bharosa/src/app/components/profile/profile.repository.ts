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

    async getProfile(userId: string): Promise<ProfileModel> {
        const result = await this.client?.profile?.find({
            where: {
                userId,
                isDeleted: false
            }
        });
        return result ? result : [];
    }

    async addProfile(profile: ProfileModel): Promise<ProfileModel> {
        const result = await this.client?.profile?.create({data: profile});
        return result ? result : [];
    }
}


