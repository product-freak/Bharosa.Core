export interface LoggerInterface {
  warning(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ): void
  info(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ): void
  error(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ): void
  debug(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ): void
  verbose(
    message: string,
    data: object,
    callerTypeName: string,
    callerMethodName: string,
  ): void
}
