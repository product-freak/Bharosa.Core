import { inject, injectable } from 'inversify';
import { RequestTypes } from './request.types';
import { RequestServiceInterface } from '../../common/interfaces/request-service.interface';
import { RequestRepositoryInterface } from '../../common/interfaces/request-repository.interface';
import { RequestModel } from '../../common/models/request.model';

@injectable()
export class RequestService implements RequestServiceInterface {

    constructor(@inject(RequestTypes.requestRepository) private readonly requestRepository: RequestRepositoryInterface) {}

    async getRequestsByCompanyId(companyId: string): Promise<RequestModel[]> {
        return await this.requestRepository.getRequestsByCompanyId(companyId);
    }

    async addRequest(request: RequestModel): Promise<RequestModel> {
        return await this.requestRepository.addRequest(request);
    }
}
