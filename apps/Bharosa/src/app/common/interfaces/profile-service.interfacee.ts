import { ProfileModel } from "../models/profile.model"

export interface ProfileServiceInterface {
    getProfile(userId: string): Promise<ProfileModel>
    addProfile(profile: ProfileModel): Promise<ProfileModel>
}
