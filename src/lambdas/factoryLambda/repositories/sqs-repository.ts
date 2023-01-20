/* eslint-disable class-methods-use-this */
import SQSModule from '../modules/sqs-client';
import IAWSResource from '../interfaces/aws-resource';

export default class SQSResource implements IAWSResource {
  private sqsModule: SQSModule;

  private sqsQueue: string;

  constructor(region: string, sqsQueue: string) {
    this.sqsModule = new SQSModule(region);
    this.sqsQueue = sqsQueue;
  }

  async sendMessage(message: string): Promise<string> {
    const sendMessageParams = {
      QueueUrl: this.sqsQueue,
      MessageBody: message,
    };
    const { MessageId } = await this.sqsModule.sendSQSMessage(sendMessageParams);
    return `Sent ${message} to SQS with Id ${MessageId}.`;
  }
}
