import { AppSyncResolverEvent } from 'aws-lambda';
import { mock } from 'jest-mock-extended';
import handler from '../src/lambdas/getVehicleLambda/app';

test('helloworldtest', async () => {

    jest.mock('aws-lambda/trigger/appsync-resolver');

    const event:AppSyncResolverEvent = 
    await handler(event);

}