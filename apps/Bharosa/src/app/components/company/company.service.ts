import { inject, injectable } from 'inversify';
import { CompanyServiceInterface } from '../../common/interfaces/company-service.interface';
import { CompanyTypes } from './company.types';
import { CompanyRepositoryInterface } from '../../common/interfaces/company-repository.interface';
import { CompanyModel } from '../../common/models/company.model';

@injectable()
export class CompanyService implements CompanyServiceInterface {
    constructor(@inject(CompanyTypes.companyRepository) private readonly companyRepository: CompanyRepositoryInterface) {}

    async getCompanyById(id: string): Promise<CompanyModel> {
        return await this.companyRepository.getCompanyById(id);
    }

    async addCompany(company: CompanyModel): Promise<CompanyModel> {
        return await this.companyRepository.addCompany(company);
    }
}
