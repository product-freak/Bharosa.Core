import { inject, injectable } from 'inversify';
import { DataStore } from '../../common/data/datastore';
import { RequestRepositoryInterface } from '../../common/interfaces/request-repository.interface';
import { RequestModel } from '../../common/models/request.model';
@injectable()
export class RequestRepository implements RequestRepositoryInterface {
    protected client;

    constructor(@inject('DataStore') protected store: DataStore) {
        this.client = this.store.getClient();
    }

    async getRequestsByCompanyId(companyId: string): Promise<RequestModel[]> {
        const result = await this.client?.request?.findMany({
            where: {
               companyId
            }
        });
        return result as RequestModel[];
    }

    async addRequest(request: RequestModel): Promise<RequestModel> {
        const result = await this.client?.request?.create({data: request});
        return result as RequestModel;
    }
}
