/* eslint-disable class-methods-use-this */
import DynamoModule from '../modules/dynamo-client';
import IAWSResource from '../interfaces/aws-resource';

export default class DynamoResource implements IAWSResource {
  private dynamoModule: DynamoModule;

  private tableName: string;

  constructor(region: string, tableName: string) {
    this.dynamoModule = new DynamoModule(region);
    this.tableName = tableName;
  }

  async sendMessage(message: string): Promise<string> {
    const putParams = {
      TableName: this.tableName,
      Item: {
        message: {
          S: message,
        },
      },
    };
    const { $metadata } = await this.dynamoModule.put(putParams);
    if ($metadata.httpStatusCode === 200) {
      return `Message: ${message} sent successfully to dynamoDB table: ${this.tableName}`;
    }
    return 'Failed to send message to dynamoDB';
  }
}
