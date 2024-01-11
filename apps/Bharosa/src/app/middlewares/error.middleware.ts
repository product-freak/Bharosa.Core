import * as express from 'express'
import { CommonContainer } from '../common/container'
import { Loggerservice } from '../common/logger/logger.service'
import { CommonTypes } from '../common/common.types'
import { ArgumentValidationError } from '../common/errors/custom-errors/argument-validation.error'
import { ApiErrorCode } from 'apps/shared/payloads/error-codes'
import { ApiErrorResponsePayload as APIErrorResponsePayload } from 'apps/Bharosa/src/app/common/models/api-error-response.payload'
import { DatabaseError } from '../common/errors/custom-errors/database.error'
import { ThirdPartyAPIError } from '../common/errors/custom-errors/third-party.error'
import { BaseError } from '../common/errors/custom-errors/base.error'
import UnauthorizedError from '../common/errors/custom-errors/unauthorized.error'

const errorMiddleware = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const logger = CommonContainer.get<Loggerservice>(CommonTypes.logger)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const nextFn = next
  let statusCode: number
  let errorResponse
  let isLogNeeded = false
  console.log(err)
  switch (true) {
    case err instanceof ArgumentValidationError:
      errorResponse = new APIErrorResponsePayload(
        (<ArgumentValidationError>err).apiErrorCode,
      )
      statusCode = 400
      break
    case err instanceof UnauthorizedError:
      errorResponse = new APIErrorResponsePayload(ApiErrorCode.E0002)
      statusCode = 401
      break
    case err instanceof ThirdPartyAPIError:
      errorResponse = new APIErrorResponsePayload(ApiErrorCode.E0003)
      statusCode = 500
      break
    case err instanceof DatabaseError:
    default:
      isLogNeeded = true
      errorResponse = new APIErrorResponsePayload(ApiErrorCode.E0001)
      statusCode = 500
      break
  }

  if (isLogNeeded) {
    logger.error(
      (<BaseError>err).message,
      {},
      'exceptionHandler',
      'ErrorMiddleware',
    )
  }

  res.status(statusCode).send(errorResponse)
}

export default errorMiddleware
