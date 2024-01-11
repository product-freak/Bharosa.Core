import { injectable } from 'inversify'
import * as Sentry from '@sentry/node'
import '@sentry/tracing'
import { environment } from 'apps/Bharosa/src/environments/environment'
import { LogProviderInterface } from '../interfaces/log-provider.interface'
import LogLevels from '../enums/log-levels.enum'
import { LoggerLevel } from './logger-level.enum'

@injectable()
export default class SentryLogProvider implements LogProviderInterface {
  public initialize() {
    Sentry.init({
      dsn: environment.sentryIOUrl,
      environment: environment.envName,
      integrations: [new Sentry.Integrations.Http({ tracing: true })],
      tracesSampleRate: 0.5,
    })
  }

  setUserContext(accountId: string, emailAddress: string) {
    Sentry.setUser({
      email: emailAddress,
      accountId,
    })
  }

  log(level: LoggerLevel, message: string, attributes: any) {
    if (level == LoggerLevel.Debug || level === LoggerLevel.Info) {
      Sentry.addBreadcrumb({
        message,
        data: attributes,
        level: level,
      })
    } else {
      Sentry.captureException(level, {
        extra: {
          message,
          attributes,
          level: LogLevels[level]
        },
      })
    }
  }
}
