/* eslint-disable class-methods-use-this */
import ResourceFactory from '../factories/resource-factory';
import AWSResource from '../interfaces/aws-resource';
import LambdaResource from '../repositories/lambda-repository';

export default class LambdaResourceCreator extends ResourceFactory {
  private region: string = 'us-east-1';

  private lambdaName: string = 'getAliasByEmail';

  public resourceFactory(): AWSResource {
    return new LambdaResource(this.region, this.lambdaName);
  }
}
