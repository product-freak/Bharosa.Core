import { injectable } from "inversify";
import "reflect-metadata";
import { HashProviderInterface } from "../interfaces/hash-provider.interface";
import bcrypt from 'bcrypt';
import { environment } from "apps/Bharosa/src/environments/environment";

@injectable()
export class HashProvider implements HashProviderInterface {
  constructor() {}

  async generatePasswordHash(password: string): Promise<string> {
    return await bcrypt.hash(password, environment.saltBcryptNumber);
  }
  async comparePasswordHash(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash);
  }
}
