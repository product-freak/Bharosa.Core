export interface StorageProviderInterface {
  uploadFile(
    file: Express.Multer.File,
    filename: string,
  ): Promise<string>
}
