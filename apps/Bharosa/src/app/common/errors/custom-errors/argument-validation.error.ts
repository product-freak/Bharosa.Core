import { BaseError } from './base.error'

export class ArgumentValidationError extends BaseError {
  constructor(argName: string, argValue: any, apiErrorCode: string) {
    super(
      'ArgumentError',
      'Invalid argument value. Name: ' + argName + '. Value: ' + argValue,
    )
    this.apiErrorCode = apiErrorCode
  }
}
