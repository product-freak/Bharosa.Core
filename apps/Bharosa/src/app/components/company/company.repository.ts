import { inject, injectable } from 'inversify';
import { DataStore } from '../../common/data/datastore';
import { CompanyRepositoryInterface } from '../../common/interfaces/company-repository.interface';
import { CompanyModel } from '../../common/models/company.model';
import { Prisma } from '@prisma/client';

@injectable()
export class CompanyRepository implements CompanyRepositoryInterface {
    protected client;

    constructor(@inject('DataStore') protected store: DataStore) {
        this.client = this.store.getClient();
    }

    async addCompany(company: CompanyModel): Promise<CompanyModel> {
        const result = await this.client?.company?.create({data: company as Prisma.CompanyCreateInput});
        return result as CompanyModel;
    }

    async getCompanyById(id: string): Promise<CompanyModel> {
        const result = await this.client?.company?.findFirst({
            where: {
                id
            }
        });
        return result as CompanyModel;
    }
}
