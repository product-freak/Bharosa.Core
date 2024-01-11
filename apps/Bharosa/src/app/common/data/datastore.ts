import { PrismaClient } from '@prisma/client'
import { injectable } from 'inversify'
import { CommonContainer } from '../container';
import { RequestContext } from '../jwtservice/requests-context.service';
import { CommonTypes } from '../common.types';

@injectable()
export class DataStore {
  public static dbClient: PrismaClient
  public static requestContext: RequestContext;

  public getClient() {
    return DataStore.dbClient
  }

  public static initialize() {
    this.dbClient = new PrismaClient();
    this.requestContext =  CommonContainer.get<RequestContext>(
      CommonTypes.requestContext,
    )

    this.dbClient.$use(async (params: any, next: any) => {
      const userId = this.requestContext.getUserId()
      
      if(params.action=='upsert'){
        params.args.update.updatedById = userId;
        params.args.create.updatedById = userId;
        params.args.create.createdById = userId;
      }
      else if(params.action=='create'){
        params.args.data.updatedById =userId;
        params.args.data.createdById = userId;
      }
      else if(params.action=='update'){
        params.args.data.updatedById =userId;
      }
      
      const result = await next(params)
      return result
    })
  }
}
