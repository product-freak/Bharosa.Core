import * as express from 'express'
import {
  interfaces,
  controller,
  request,
  response,
  httpGet
} from 'inversify-express-utils'
import { inject } from 'inversify'
import { UserTypes } from './user.types'
import { UserService } from './user.service'
import { CommonTypes } from '../../common/common.types'
import { RequestContext } from '../../common/jwtservice/requests-context.service'

@controller('/user')
export class UserController implements interfaces.Controller {
  constructor(@inject(UserTypes.userService) private userService: UserService, @inject(CommonTypes.requestContext) private readonly requestContext: RequestContext) {}

  
  @httpGet('')
  private async getUserById(
    @response() res: express.Response,
  ) {
    const userId = this.requestContext.getUserId();
    res.send(await this.userService.getUserById(userId));
  }
}
