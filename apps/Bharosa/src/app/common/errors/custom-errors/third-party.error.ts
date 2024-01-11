import { ApiErrorCode } from 'apps/shared/payloads/error-codes'
import { BaseError } from './base.error'

export class ThirdPartyAPIError extends BaseError {
  constructor(apiErrorCode: string) {
    super('ThirdPartyAPIError', apiErrorCode)
  }
}
