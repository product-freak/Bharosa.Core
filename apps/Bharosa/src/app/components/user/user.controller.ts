import * as express from 'express'
import {
  interfaces,
  controller,
  request,
  response,
  httpGet,
  httpPut,
  httpPost
} from 'inversify-express-utils'
import { inject } from 'inversify'
import { UserTypes } from './user.types'
import { UserService } from './user.service'
import { CommonTypes } from '../../common/common.types'
import { RequestContext } from '../../common/jwtservice/requests-context.service'
import { UserServiceInterface } from '../../common/interfaces/user-service.interface'

@controller('/user')
export class UserController implements interfaces.Controller {
  constructor(@inject(UserTypes.userService) private userService: UserServiceInterface, @inject(CommonTypes.requestContext) private readonly requestContext: RequestContext) {}

  
  @httpGet('')
  private async getUserById(
    @response() res: express.Response,
  ) {
    const userId = this.requestContext.getUserId();
    res.send(await this.userService.getUserById(userId));
  }

  @httpPost('')
  private async addUser(
    @request() req: express.Request,
    @response() res: express.Response,
  ) {
    res.send(await this.userService.addUser(req.body));
  }

  @httpPut('')
  private async updateUser(
    @request() req: express.Request,
    @response() res: express.Response,
  ) {
    const userId = this.requestContext.getUserId();
    res.send(await this.userService.updateUserById(userId, req.body));
  }
}
