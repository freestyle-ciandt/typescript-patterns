export default interface IAWSResource {
  sendMessage(message: string): Promise<string>;
}
