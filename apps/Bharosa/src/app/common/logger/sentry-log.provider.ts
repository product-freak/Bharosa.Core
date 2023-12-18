import { injectable } from 'inversify'
import axios from 'axios'
import CleverTap from 'clevertap'
import * as Sentry from '@sentry/node'
import '@sentry/tracing'
import { environment } from 'apps/Bharosa/src/environments/environment'
import { LogProviderInterface } from '../interfaces/log-provider.interface'
import LogLevels from '../enums/log-levels.enum'

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

  log(level: LogLevels, message: string, attributes: any) {
    if (level === LogLevels.Debug || level === LogLevels.Info) {
      Sentry.addBreadcrumb({
        message,
        data: attributes,
        level: level === LogLevels.Debug ? 'debug' : 'info',
      })
    } else {
      Sentry.captureException(level, {
        extra: {
          message,
          attributes,
          level,
        },
      })
    }
  }
}
