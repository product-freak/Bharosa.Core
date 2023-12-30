import { CompanyModel } from "../models/company.model"

export interface CompanyServiceInterface {
    addCompany(company: CompanyModel): Promise<CompanyModel>
    getCompanyById(id: string): Promise<CompanyModel>
}
