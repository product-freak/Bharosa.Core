import * as express from 'express'
import { controller, httpGet, httpPost, interfaces } from 'inversify-express-utils';
import joiValidateMiddleware from '../../middlewares/joi-validate.middleware';
import { createPostSchema } from './post-schema.constant';
import { PostTypes } from './post.types';
import { inject } from 'inversify';
import { CommonTypes } from '../../common/common.types';
import { RequestContext } from '../../common/jwtservice/requests-context.service';
import { PostServiceInterface } from '../../common/interfaces/post-service.interface';

@controller('/post')
export class PostController implements interfaces.Controller {
    constructor(@inject(PostTypes.postService) private readonly postService: PostServiceInterface, @inject(CommonTypes.requestContext) private readonly requestContext: RequestContext) {}

    @httpGet('', CommonTypes.jwtAuthMiddleware)
    private async getPosts(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const userId = this.requestContext.getUserId();
        const posts = await this.postService.getPosts(userId);
        res.send(posts);
    }

    @httpPost('', joiValidateMiddleware(createPostSchema))
    private async addPosts(
        req: express.Request,
        res: express.Response
    ): Promise<any> {
        const posts = await this.postService.addPost(req.body);
        res.send(posts);
    }
}
