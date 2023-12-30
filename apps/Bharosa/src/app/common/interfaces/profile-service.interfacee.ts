import { ProfileModel } from "../models/profile.model"

export interface ProfileServiceInterface {
    getProfileByUserId(userId: string): Promise<ProfileModel>
    addProfile(profile: ProfileModel): Promise<ProfileModel>
}
