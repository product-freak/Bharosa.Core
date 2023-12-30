import * as express from 'express'
import { controller, httpGet, httpPost, interfaces } from 'inversify-express-utils';
import joiValidateMiddleware from '../../middlewares/joi-validate.middleware';
import { createCompanySchema } from './company-schema.constant';
import { inject } from 'inversify';
import { CommonTypes } from '../../common/common.types';
import { CompanyTypes } from './company.types';
import { CompanyServiceInterface } from '../../common/interfaces/company-service.interface';

@controller('/company')
export class CompanyController implements interfaces.Controller {

    constructor(@inject(CompanyTypes.companyService) private readonly companyService: CompanyServiceInterface) {}

    @httpGet('/:id', CommonTypes.jwtAuthMiddleware)
    private async getCompany(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const id = req.params.id;
        const company = await this.companyService.getCompanyById(id);
        res.send(company);
    }

    @httpPost('', joiValidateMiddleware(createCompanySchema))
    private async addCompany(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const company = await this.companyService.addCompany(req.body);
        res.send(company);
    }
}
