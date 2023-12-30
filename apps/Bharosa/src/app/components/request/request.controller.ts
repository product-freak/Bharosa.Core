import * as express from 'express'
import { controller, httpGet, httpPost, interfaces } from 'inversify-express-utils';
import { RequestTypes } from './request.types';
import { inject } from 'inversify';
import { CommonTypes } from '../../common/common.types';
import { RequestServiceInterface } from '../../common/interfaces/request-service.interface';
import joiValidateMiddleware from '../../middlewares/joi-validate.middleware';
import { createRequestSchema } from './request-schema.constant';

@controller('/request')
export class RequestController implements interfaces.Controller {

    constructor(@inject(RequestTypes.requestService) private readonly requestService: RequestServiceInterface) {}

    @httpGet('/:companyId', CommonTypes.jwtAuthMiddleware)
    private async getRequestsByCompanyId(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const { companyId } = req.params;
        const requests = await this.requestService.getRequestsByCompanyId(companyId);
        res.send(requests);
    }

    @httpPost('', joiValidateMiddleware(createRequestSchema))
    private async addRequest(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const posts = await this.requestService.addRequest(req.body);
        res.send(posts);
    }
}
