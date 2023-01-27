import { AppSyncResolverEvent } from 'aws-lambda';
import { QueryGetVehicleArgs, Vehicle } from '../src/types/appsync';
import { handler } from '../src/lambdas/getVehicleLambda/app';

describe('Testing handler Jets', () => {
  test('primeiro teste', async () => {
    // AWS type
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
        domainName: '',
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

  test('getRegularVehicle', async () => {
    // AWS type
    const event: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
      arguments: {
        id: '3',
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
        domainName: '',
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
      id: '3',
      category: 'boat',
      seats: 3,
      publishedAt: 1658456533,
      available: true,
    });
  });

  test('getRegularVehicle: should return null', async () => {
    // AWS type
    const event: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
      arguments: {
        id: '5',
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
        domainName: '',
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
    try {
      await handler(event);
    } catch (err) {
      expect((err as Error).message).toEqual('Sorry. Vehicle not found!');
      return;
    }
    throw new Error('Expect to fail but this function run successfully');
  });

  test('getPromotionalVehicle', async () => {
    const event: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
      arguments: {
        id: '4',
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
        domainName: '',
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
      id: '4',
      category: 'spaceship',
      seats: 20,
      publishedAt: 1659646128,
      available: true,
    });
  });
});
