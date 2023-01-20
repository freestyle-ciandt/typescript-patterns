/* eslint-disable class-methods-use-this */
import ResourceFactory from '../factories/resource-factory';
import AWSResource from '../interfaces/aws-resource';
import DynamoResource from '../repositories/dynamo-repository';

export default class DynamoResourceCreator extends ResourceFactory {
  private region: string = 'us-east-1';

  private tableName: string = 'exercicio-05-aliases';

  public resourceFactory(): AWSResource {
    return new DynamoResource(this.region, this.tableName);
  }
}
