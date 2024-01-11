import { UserModel } from "../models/user.model";

export interface DataStoreInterface {
  execute(): Promise<UserModel[]>
}
