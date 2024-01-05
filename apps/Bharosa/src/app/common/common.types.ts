const CommonTypes = {
  logger: Symbol.for('LoggerInterface'),
  jwt: Symbol.for('JWTInterface'),
  requestContext: Symbol.for('RequestContext'),
  jwtAuthMiddleware: Symbol.for('JWTAuthMiddleware'),
  requestIdMiddleware: Symbol.for('RequestIdMiddleware'),
  hash: Symbol.for('HashInterface'),
  storage: Symbol.for('StorageProvider'),
  sentryLog: Symbol.for('SentryLogProvider'),
  joiValidateMiddleware: Symbol.for('joiValidateMiddleware'),
  hashProvider: Symbol.for('HashProvider')
}

export { CommonTypes }
