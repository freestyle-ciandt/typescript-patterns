import S3Module from '../modules/s3-client';
import IAWSResource from '../interfaces/aws-resource';

export default class S3Resource implements IAWSResource {
  private s3Module: S3Module;

  private bucketName: string;

  constructor(region: string, bucketName: string) {
    this.s3Module = new S3Module(region);
    this.bucketName = bucketName;
  }

  public async sendMessage(message: string): Promise<string> {
    const putObjectParams = {
      Bucket: this.bucketName,
      Key: 'message.txt',
      Body: message,
    };
    const { $metadata } = await this.s3Module.put(putObjectParams);
    if ($metadata.httpStatusCode === 200) {
      return `Message: ${message} sent successfully to S3 Bucket: ${this.bucketName}`;
    }
    return 'Failed to send message to S3 Bucket';
  }
}
