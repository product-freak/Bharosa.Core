import { RequestModel } from "../models/request.model"

export interface RequestServiceInterface {
    getRequestsByCompanyId(companyId: string): Promise<RequestModel[]>
    addRequest(request: RequestModel): Promise<RequestModel>
}
