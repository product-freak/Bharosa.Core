import { UserModel } from "../models/user.model"

export interface UserRepositoryInterface {
    addUser(user: UserModel): Promise<UserModel>
    getUserById(id: string): Promise<UserModel>
    getUserByAccountId(accountId: string): Promise<UserModel>
    getUsers(): Promise<UserModel[]>
    updateUserById(id: string, user: UserModel): Promise<UserModel>
}
