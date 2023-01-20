import ResourceFactory from '../factories/resource-factory';

export default async function ExecuteResource(resourceCreator: ResourceFactory) {
  console.log('Running execute resource service');
  return resourceCreator.forwardMessage();
}
