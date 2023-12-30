import { injectable } from 'inversify'
import 'reflect-metadata'
import { AsyncLocalStorage } from 'async_hooks'
import { RequestContextInterface } from '../interfaces/request-context.interface'

@injectable()
export class RequestContext implements RequestContextInterface {
  asyncLocalStorage
  constructor() {
    this.asyncLocalStorage = new AsyncLocalStorage()
  }

  private getStore() {
    const store = this.asyncLocalStorage.getStore()
    return store ? store : {}
  }

  setUserId(userId: string) {
    const store = this.getStore()
    store['userId'] = userId
    this.asyncLocalStorage.enterWith(store)
  }

  setEmail(email: string) {
    const store = this.getStore()
    store['email'] = email
    this.asyncLocalStorage.enterWith(store)
  }

  setAccountId(accountId: string) {
    const store = this.getStore()
    store['accountId'] = accountId
    this.asyncLocalStorage.enterWith(store)
  }

  setTimezone(timezone: string) {
    const store = this.getStore()
    store['timezone'] = timezone
    this.asyncLocalStorage.enterWith(store)
  }

  setUserType(userType: string) {
    const store = this.getStore()
    store['userType'] = userType
    this.asyncLocalStorage.enterWith(store)
  }

  getUserId() {
    return this.asyncLocalStorage.getStore()?.['userId']
  }

  getAccountId() {
    return this.asyncLocalStorage.getStore()?.['accountId']
  }

  getTimezone() {
    return this.asyncLocalStorage.getStore()?.['timezone']
  }

  getUserType() {
    return this.asyncLocalStorage.getStore()?.['userType']
  }
}
