import { inject, injectable } from 'inversify';
import { DataStore } from '../../common/data/datastore';
import { CompanyRepositoryInterface } from '../../common/interfaces/company-repository.interface';
import { CompanyModel } from '../../common/models/company.model';

@injectable()
export class CompanyRepository implements CompanyRepositoryInterface {
    protected client;

    constructor(@inject('DataStore') protected store: DataStore) {
        this.client = this.store.getClient();
    }

    async addCompany(company: CompanyModel): Promise<CompanyModel> {
        const result = await this.client?.company?.create({data: company});
        return result ? result : [];
    }

    async getCompanyById(id: string): Promise<CompanyModel> {
        const result = await this.client?.company?.find({
            where: {
                id
            }
        });
        return result ? result : [];
    }
}
