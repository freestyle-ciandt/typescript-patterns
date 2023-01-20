/* eslint-disable class-methods-use-this */
import LambdaModule from '../modules/lambda-client';
import IAWSResource from '../interfaces/aws-resource';

export default class LambdaResource implements IAWSResource {
  private lambdaModule: LambdaModule;

  private functionName: string;

  constructor(region: string, functionName: string) {
    this.lambdaModule = new LambdaModule(region);
    this.functionName = functionName;
  }

  async sendMessage(message: string): Promise<string> {
    const invocationParams = {
      FunctionName: this.functionName,
      Payload: this.lambdaModule.convertToUnit8(`{ "message": "${message}" }`),
    };
    const response = await this.lambdaModule.invokeLambda(invocationParams);
    return this.lambdaModule.convertToUtf8(response!);
  }
}
