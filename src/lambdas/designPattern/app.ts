import { AppSyncResolverEvent } from 'aws-lambda';
import { MessageData, MutationDefaultMessageArgs } from '../../types/appsync';

export const handler = async (
  event: AppSyncResolverEvent<MutationDefaultMessageArgs, MessageData>,
): Promise<MessageData> => {
  console.log(JSON.stringify(event));
  return Promise.resolve({ route: '', message: '' });
};

export default {};