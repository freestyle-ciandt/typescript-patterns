/* eslint-disable class-methods-use-this */
import ResourceFactory from '../factories/resource-factory';
import AWSResource from '../interfaces/aws-resource';
import S3Resource from '../repositories/s3-repository';

export default class S3ResourceCreator extends ResourceFactory {
  private region: string = 'us-east-1';

  private bucketName: string = 'henrique-romulo';

  public resourceFactory(): AWSResource {
    return new S3Resource(this.region, this.bucketName);
  }
}
