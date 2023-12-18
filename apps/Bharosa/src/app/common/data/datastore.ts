import { PrismaClient } from '@prisma/client'
import { injectable } from 'inversify'

@injectable()
export class DataStore {
  public static dbClient
  public static requestContext;

  public getClient() {
    return DataStore.dbClient
  }

  public static initialize() {
    this.dbClient = new PrismaClient();
  }
}
