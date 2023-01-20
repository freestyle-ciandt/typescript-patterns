import { EventMessage } from './types/types';
import ExecuteResource from './services/resource-exec';
import ResourceConfig from './config/resource-mapping';

export const handler = async (event: EventMessage): Promise<void> => {
  console.log(event);
  const { message, route } = event;
  const resources = ResourceConfig.resourceConfig();
  const result = await ExecuteResource(resources[route](message));
  console.log(result);
  console.log('Sent message with data: ', event);
};

export default {
  handler,
};

(async () => {
  await handler({
    message: 'test typescript factory dojo',
    route: 'S3',
  });
})();
