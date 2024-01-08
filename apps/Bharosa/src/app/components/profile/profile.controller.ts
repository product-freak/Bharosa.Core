import * as express from 'express'
import { controller, httpGet, httpPost, httpPut, interfaces } from 'inversify-express-utils';
import joiValidateMiddleware from '../../middlewares/joi-validate.middleware';
import { ProfileTypes } from './profile.types';
import { inject } from 'inversify';
import { CommonTypes } from '../../common/common.types';
import { RequestContext } from '../../common/jwtservice/requests-context.service';
import { createProfileSchema } from './profile-schema.constant';
import { ProfileServiceInterface } from '../../common/interfaces/profile-service.interfacee';

@controller('/profile')
export class ProfileController implements interfaces.Controller {
    constructor(@inject(ProfileTypes.profileService) private readonly profileService: ProfileServiceInterface, @inject(CommonTypes.requestContext) private readonly requestContext: RequestContext) {}

    @httpGet('', CommonTypes.jwtAuthMiddleware)
    private async getProfile(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const userId = this.requestContext.getUserId();
        const profile = await this.profileService.getProfileByUserId(userId);
        res.send(profile);
    }

    @httpPost('', joiValidateMiddleware(createProfileSchema))
    private async addProfile(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const profile = await this.profileService.addProfile(req.body);
        res.send(profile);
    }

    @httpPut('/:id', joiValidateMiddleware(createProfileSchema))
    private async updateProfile(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const profile = await this.profileService.updateProileById(req.params.id, req.body);
        res.send(profile);
    }
}
