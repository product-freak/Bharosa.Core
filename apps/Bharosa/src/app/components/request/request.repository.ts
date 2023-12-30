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
        const result = await this.client?.request?.find({
            where: {
                id: companyId
            }
        });
        return result ? result : [];
    }

    async addRequest(request: RequestModel): Promise<RequestModel> {
        const result = await this.client?.request?.create({data: request});
        return result ? result : [];
    }
}
