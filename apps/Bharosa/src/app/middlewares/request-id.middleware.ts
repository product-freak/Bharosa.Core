import * as express from 'express'
import { AsyncLocalStorage } from 'async_hooks'

export class RequestIdMiddleware {
  async setRequestId(req: express.Request, res: express.Response) {
    const asyncLocalStorage = new AsyncLocalStorage()
    asyncLocalStorage.enterWith({
      'x-request-id': req.headers['x-request-id'],
    })
  }
}
