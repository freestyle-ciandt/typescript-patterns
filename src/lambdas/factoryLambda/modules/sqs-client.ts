import {
  SendMessageCommand,
  SendMessageCommandInput,
  SendMessageCommandOutput,
  SQSClient,
} from '@aws-sdk/client-sqs';

export default class SQSModule {
  private sqsClient: SQSClient;

  constructor(region: string) {
    this.sqsClient = new SQSClient({
      region,
    });
  }

  public async sendSQSMessage(params: SendMessageCommandInput): Promise<SendMessageCommandOutput> {
    const command = new SendMessageCommand(params);
    return this.sqsClient.send(command);
  }
}
