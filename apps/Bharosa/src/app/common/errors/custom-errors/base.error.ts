export abstract class BaseError extends Error {
  public readonly name: string
  public apiErrorCode = 'E0001'

  constructor(name: string, message: string) {
    super(message)
    this.name = name
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}
