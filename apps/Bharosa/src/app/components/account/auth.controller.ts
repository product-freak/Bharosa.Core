import * as express from 'express'
import {
  interfaces,
  controller,
  httpPost,
  request,
  response,
} from 'inversify-express-utils'
import { inject } from 'inversify'
import { AccountTypes } from './account.types'
import { AuthServiceInterface } from '../../common/interfaces/auth-service.interface'
import joiValidateMiddleware from '../../middlewares/joi-validate.middleware'
import { loginSchema } from './account-schema.constant'

@controller('/auth')
export class AuthController implements interfaces.Controller {

  constructor(@inject(AccountTypes.authService) private authService: AuthServiceInterface) {}
  
  @httpPost('/login', joiValidateMiddleware(loginSchema))
  private async login(
    @request() req: express.Request,
    @response() res: express.Response,
  ) {
    res.send(await this.authService.login(req.body))
  }

  @httpPost('/sign-up')
  private async signUp(
    @request() req: express.Request,
    @response() res: express.Response,
  ) {
    res.send(await this.authService.signUp(req.body))
  }
}
