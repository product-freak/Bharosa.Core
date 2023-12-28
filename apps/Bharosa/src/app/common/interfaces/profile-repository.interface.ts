import { ProfileModel } from "../models/profile.model";

export interface ProfileRepositoryInterface {
    getProfile(userId: string): Promise<ProfileModel>
    addProfile(profile: ProfileModel): Promise<ProfileModel>
}
