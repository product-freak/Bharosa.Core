import { CompanyModel } from "../models/company.model";

export interface CompanyRepositoryInterface {
    addCompany(company: CompanyModel): Promise<CompanyModel>
    getCompanyById(id: string): Promise<CompanyModel>
}
