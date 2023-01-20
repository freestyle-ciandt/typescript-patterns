/* eslint-disable class-methods-use-this */
import {
  LambdaClient,
  InvokeCommand,
  InvokeCommandInput,
} from '@aws-sdk/client-lambda';
import { fromUtf8, toUtf8 } from '@aws-sdk/util-utf8-node';

export default class LambdaModule {
  private lambdaClient: LambdaClient;

  constructor(region: string) {
    this.lambdaClient = new LambdaClient({
      region,
    });
  }

  convertToUnit8(payload: string): Uint8Array {
    return fromUtf8(payload);
  }

  convertToUtf8(payloadResponse: Uint8Array) {
    return toUtf8(payloadResponse);
  }

  async invokeLambda(params: InvokeCommandInput) {
    const command = new InvokeCommand(params);

    const { Payload } = await this.lambdaClient.send(command);
    return Payload;
  }
}
