import IAWSResource from '../interfaces/aws-resource';

export default abstract class ResourceFactory {
  private messageValue: string;
  public abstract resourceFactory(): IAWSResource;

  constructor(message: string) {
    this.messageValue = message;
  }

  public async forwardMessage(): Promise<string> {
    const resource = this.resourceFactory();
    return resource.sendMessage(this.messageValue);
  }
}
