import { ProfileModel } from "../models/profile.model";

export interface ProfileRepositoryInterface {
    getProfileByUserId(userId: string): Promise<ProfileModel>
    addProfile(profile: ProfileModel): Promise<ProfileModel>
    updateProfileById(id: string, profile: ProfileModel): Promise<ProfileModel>
    updateProfileByUserId(userId: string, profile: ProfileModel): Promise<ProfileModel>
}
