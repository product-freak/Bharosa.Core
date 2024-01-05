import { injectable } from 'inversify'
import 'reflect-metadata'
import { CommonContainer } from './container'
import { DataStore } from './data/datastore'
import { DataStoreInterface } from './data/datastore.interface'
import { DataStoreRepository } from './data/base.repository'
import { JWTInterface } from './interfaces/jwt.interface'
import { JWTService } from './jwtservice/jwt.service'
import { CommonTypes } from './common.types'
import { RequestContextInterface } from './interfaces/request-context.interface'
import { RequestContext } from './jwtservice/requests-context.service'
import { StorageProviderInterface } from './interfaces/storage-provider.interface'
import { StorageProvider } from './storage-provider/storage-provider.service'
import { LogProviderInterface } from './interfaces/log-provider.interface'
import SentryLogProvider from './logger/sentry-log.provider'
import { environment } from '../../environments/environment'
import { LoggerInterface } from './logger/logger.interface'
import { Loggerservice } from './logger/logger.service'
import { HashProviderInterface } from './interfaces/hash-provider.interface'
import { HashProvider } from './hash-provider/hash-provider.service'


@injectable()
export default class CommonBootstrapper {
  public static initialize() {
    this.initializeEnvironment();
    CommonContainer.bind<LoggerInterface>(CommonTypes.logger).to(Loggerservice)
    this.initializeDataStore()
  }

  private static initializeDataStore() {
    CommonContainer.bind<DataStore>('DataStore').to(DataStore)
    CommonContainer.bind<DataStoreInterface>('DataStoreRepository').to(
      DataStoreRepository,
    )
    CommonContainer.bind<JWTInterface>(CommonTypes.jwt).to(JWTService)
    CommonContainer.bind<RequestContextInterface>(CommonTypes.requestContext)
      .to(RequestContext)
      .inSingletonScope()
    CommonContainer.bind<StorageProviderInterface>(CommonTypes.storage).to(
      StorageProvider,
    )
    CommonContainer.bind<LogProviderInterface>(CommonTypes.sentryLog)
      .to(SentryLogProvider)
      .inSingletonScope()
    CommonContainer.bind<HashProviderInterface>(CommonTypes.hashProvider).to(
      HashProvider,
    )
    if (environment.envName !== 'local') {
      CommonContainer.get<LogProviderInterface>(
        CommonTypes.sentryLog,
      ).initialize()
    }
  }

  private static initializeEnvironment() {
    environment.envName = process.env.envName || environment.envName
    environment.envVersion =
      Number(process.env.envVersion) || environment.envVersion
    environment.jwtPrivateKey =
      process.env.jwtPrivateKey || environment.jwtPrivateKey
    environment.sentryIOUrl = process.env.sentryIOUrl || environment.sentryIOUrl
    environment.googleClientId =
      process.env.googleClientId || environment.googleClientId
    environment.googleClientSecretKey =
      process.env.googleClientSecretKey || environment.googleClientSecretKey
    environment.awsAccesskeyId =
      process.env.awsAccesskeyId || environment.awsAccesskeyId
    environment.awsSecretAccessKey =
      process.env.awsSecretAccessKey || environment.awsSecretAccessKey
    environment.s3BucketName =
      process.env.s3BucketName || environment.s3BucketName
    environment.locationSearchRadiusInMeters =
      Number(process.env.locationSearchRadiusInMeters) ||
      environment.locationSearchRadiusInMeters
    environment.googleLocationSearchApiKey =
      process.env.googleLocationSearchApiKey ||
      environment.googleLocationSearchApiKey
    environment.sendgridApiKey =
      process.env.sendgridApiKey || environment.sendgridApiKey
    environment.linkPreviewApiKey =
      process.env.linkPreviewApiKey || environment.linkPreviewApiKey
    environment.cleverTapAccountId =
      process.env.cleverTapAccountId || environment.cleverTapAccountId
    environment.cleverTapPasscode =
      process.env.cleverTapPasscode || environment.cleverTapPasscode
    environment.region = process.env.region || environment.region
    environment.awsSNSApiVersion =
      process.env.awsSNSApiVersion || environment.awsSNSApiVersion
    environment.saltBcryptNumber = Number(process.env.saltBcryptNumber)
  }

}
