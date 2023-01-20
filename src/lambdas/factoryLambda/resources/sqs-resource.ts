/* eslint-disable class-methods-use-this */
import ResourceFactory from '../factories/resource-factory';
import AWSResource from '../interfaces/aws-resource';
import SQSResource from '../repositories/sqs-repository';

export default class SQSResourceCreator extends ResourceFactory {
  private region: string = 'us-east-1';

  private sqsQueue: string = 'https://sqs.us-east-1.amazonaws.com/193490403882/sam-dojo-daniel-marco-5-Queue';

  public resourceFactory(): AWSResource {
    return new SQSResource(this.region, this.sqsQueue);
  }
}
