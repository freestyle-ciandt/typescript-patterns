import { AppSyncResolverEvent } from 'aws-lambda';
import { QueryGetVehicleArgs, Vehicle } from '../appsync';
import handler from '../src/lambdas/getVehicleLambda/app';

test('get Promotion Vehicle with success', async () => {
    
    let event:AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
        arguments: {
            id: '4'
        },
        source: {
            __typename: undefined,
            available: false,
            category: '',
            id: '',
            publishedAt: 0,
            seats: 0
        },
        request: {
            headers: undefined!
        },
        info: {
            selectionSetList: [],
            selectionSetGraphQL: '',
            parentTypeName: '',
            fieldName: '',
            variables: {}
        },
        prev: null,
        stash: {}
    };

    const vehicle = await handler(event);
    
    expect(vehicle.id).toBe('4');
});