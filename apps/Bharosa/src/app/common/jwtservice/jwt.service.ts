import { injectable } from 'inversify'
import 'reflect-metadata'
import jwt from 'jsonwebtoken'
import { environment } from '../../../environments/environment'
import { JWTInterface } from '../interfaces/jwt.interface'
import { AccountUserModel } from '../models/account-user.model'

@injectable()
export class JWTService implements JWTInterface {
  constructor() {
    //
  }
  public validate(token: string): AccountUserModel {
    token = token.replace('Bearer ', '')
    const verifiedData = jwt.verify(token, environment.jwtPrivateKey)
    return verifiedData as AccountUserModel
  }
  public encode(details: object): string {
    const jwtToken = jwt.sign(details, environment.jwtPrivateKey)
    return jwtToken
  }
  public decode(token: string): AccountUserModel {
    token = token.replace('Bearer ', '')
    if (token) {
      const jsonPayload = jwt.decode(token)
      return jsonPayload as AccountUserModel
    } else {
      return null
    }
  }
}
