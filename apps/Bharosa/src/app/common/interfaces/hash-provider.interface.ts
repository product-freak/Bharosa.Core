export interface HashProviderInterface {
    generatePasswordHash(password: string): Promise<string>
    comparePasswordHash(password: string, passwordHash: string): Promise<boolean>
}