import { LoggerLevel } from "../logger/logger-level.enum"

export interface LogProviderInterface {
  initialize(): void
  log(level: LoggerLevel, message: string, attributes: any): void
  setUserContext(accountId: string, emailAddress: string): void
}
