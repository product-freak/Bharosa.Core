import { RequestContextType } from "../enums/request-context-type.enum"

export interface JWTInterface {
  validate(jwt: string): RequestContextType
  encode(details: object): string
  decode(jwt: string): RequestContextType
}
