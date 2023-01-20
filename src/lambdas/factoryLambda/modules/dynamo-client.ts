import {
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
} from '@aws-sdk/client-dynamodb';

export default class DynamoModule {
  private dynamoClient: DynamoDBClient;

  constructor(region: string) {
    this.dynamoClient = new DynamoDBClient({
      region,
    });
  }

  public async put(params: PutItemCommandInput): Promise<PutItemCommandOutput> {
    const command = new PutItemCommand(params);
    return this.dynamoClient.send(command);
  }
}
