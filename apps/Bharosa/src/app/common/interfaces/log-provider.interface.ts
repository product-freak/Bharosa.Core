import LogLevels from "../enums/log-levels.enum"

export interface LogProviderInterface {
  initialize()
  log(level: LogLevels, message: string, attributes: any)
  setUserContext(accountId: string, emailAddress: string)
}
