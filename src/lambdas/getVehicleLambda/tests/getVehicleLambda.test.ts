import { AppSyncResolverEvent } from 'aws-lambda';
import { QueryGetVehicleArgs, Vehicle } from 'types/appsync';
import { handler } from '../app'

describe('Testing handler Jets', () => {
  test('primeiro teste', async () => {
    //AWS type 
    const event: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
      arguments: {
        id: '1',
      },
      source: {
        __typename: undefined,
        available: false,
        category: '',
        id: '',
        publishedAt: 0,
        seats: 0,
      },
      request: {
        headers: {},
      },
      info: {
        selectionSetList: [],
        selectionSetGraphQL: '',
        parentTypeName: '',
        fieldName: '',
        variables: {},
      },
      prev: null,
      stash: {},
    };

    const resutl = await handler(event);
    expect(resutl).toEqual({
      id: '1',
      category: 'car',
      seats: 5,
      publishedAt: 1658468453,
      available: true,
    });
  });
})