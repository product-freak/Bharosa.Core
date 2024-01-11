import { BaseError } from './base.error'

export class DatabaseError extends BaseError {
  constructor(message: string) {
    super('DatabaseError', message)
  }
}
