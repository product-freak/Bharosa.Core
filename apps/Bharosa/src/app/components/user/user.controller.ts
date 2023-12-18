import * as express from 'express'
import {
  interfaces,
  controller,
  httpPost,
  request,
  response,
  httpGet,
  httpDelete
} from 'inversify-express-utils'
import { inject } from 'inversify'
import { UserTypes } from './user.types'
import { UserService } from './user.service'

@controller('/user')
export class UserController implements interfaces.Controller {
  constructor(@inject(UserTypes.userService) private userService: UserService) {}

  
  @httpGet('/:id')
  private async getUsers(
    @request() req: express.Request,
    @response() res: express.Response,
  ) {
    res.send(await this.userService.getUserById(req.params.id));
  }


}
