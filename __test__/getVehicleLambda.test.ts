import { AppSyncResolverEvent } from 'aws-lambda';
import { QueryGetVehicleArgs, Vehicle } from '../appsync';
import handler from '../src/lambdas/getVehicleLambda/app';

const eventMock:AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
  arguments: {
    id: '',
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    headers: undefined!,
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

test('get Promotion Vehicle with success', async () => {
  const event = { ...eventMock, arguments: { id: '4' } };
  const vehicle = await handler(event);

  expect(vehicle.id).toBe('4');
});

test('get Regular Vehicle with success', async () => {
  const event = { ...eventMock, arguments: { id: '2' } };
  const vehicle = await handler(event);

  expect(vehicle.id).toBe('2');
});
