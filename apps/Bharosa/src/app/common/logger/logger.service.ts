import { injectable } from 'inversify'
import 'reflect-metadata'
import winston from 'winston'
import { LoggerInterface } from './logger.interface'
import { omit } from 'lodash'
import { LoggerLevel } from './logger-level.enum'
import { environment } from '../../../environments/environment'
import { AsyncLocalStorage } from 'async_hooks'
import { CommonContainer } from '../container'
import { CommonTypes } from '../common.types'
import { LogProviderInterface } from '../interfaces/log-provider.interface'

@injectable()
export class Loggerservice implements LoggerInterface {
  private logger: winston.Logger
  private sentryLogger

  constructor() {
    this.logger = winston.createLogger({
      level: 'debug',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          handleExceptions: true,
          stderrLevels: ['warning', 'error'],
        }),
      ],
    })
    this.sentryLogger = CommonContainer.get<LogProviderInterface>(
      CommonTypes.sentryLog,
    )
  }

  warning(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ) {
    const logEntry = this.getLogEntry(
      LoggerLevel.Warning,
      callerTypeName,
      callerMethodName,
      data,
    )
    this.log(LoggerLevel.Warning, message, logEntry)
  }
  info(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ) {
    const logEntry = this.getLogEntry(
      LoggerLevel.Info,
      callerTypeName,
      callerMethodName,
      data,
    )
    this.log(LoggerLevel.Info, message, logEntry)
  }
  error(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ) {
    const logEntry = this.getLogEntry(
      LoggerLevel.Error,
      callerTypeName,
      callerMethodName,
      data,
    )
    this.log(LoggerLevel.Error, message, logEntry)
  }
  debug(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ) {
    const logEntry = this.getLogEntry(
      LoggerLevel.Debug,
      callerTypeName,
      callerMethodName,
      data,
    )
    this.log(LoggerLevel.Debug, message, logEntry)
  }
  verbose(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ) {
    const logEntry = this.getLogEntry(
      LoggerLevel.Verbose,
      callerTypeName,
      callerMethodName,
      data,
    )
    this.log(LoggerLevel.Verbose, message, logEntry)
  }

  log(level: LoggerLevel, message: string, logEntry: object) {
    this.logger.log(level, message, omit(logEntry, 'level'))
    this.sentryLogger.log(level, message, logEntry)
  }

  private getLogEntry = (
    level: LoggerLevel,
    callerTypeName: string,
    callerMethodName: string,
    data: any,
  ): any => {
    const asyncLocalStorage = new AsyncLocalStorage()
    const logEntry: any = {
      callerTypeName: callerTypeName,
      level,
      callerMethodName,
      createdAt: new Date().toJSON(),
      'x-request-id': asyncLocalStorage.getStore(),
    }
    logEntry.env = environment.envName
    logEntry.data = omit(data)
    return logEntry
  }
}
