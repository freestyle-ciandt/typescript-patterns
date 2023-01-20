import {
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';

export default class S3Module {
  private s3Client: S3Client;

  constructor(region:string) {
    this.s3Client = new S3Client({
      region,
    });
  }

  public async put(params: PutObjectCommandInput): Promise<PutObjectCommandOutput> {
    const command = new PutObjectCommand(params);
    return this.s3Client.send(command);
  }
}
