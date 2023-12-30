import { ProfileModel } from "../models/profile.model";

export interface ProfileRepositoryInterface {
    getProfileByUserId(userId: string): Promise<ProfileModel>
    addProfile(profile: ProfileModel): Promise<ProfileModel>
}
