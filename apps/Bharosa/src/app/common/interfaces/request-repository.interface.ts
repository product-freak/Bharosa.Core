import { RequestModel } from "../models/request.model";

export interface RequestRepositoryInterface {
    getRequestsByCompanyId(companyId: string): Promise<RequestModel[]>
    addRequest(request: RequestModel): Promise<RequestModel>
}
