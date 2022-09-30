import { AppSyncResolverEvent } from 'aws-lambda';
import { QueryGetVehicleArgs, Vehicle } from 'src/types/appsync';

const appsyncResolverProperties = {
  source: {
    __typename: undefined,
    available: false,
    category: '',
    id: '',
    publishedAt: 0,
    seats: 0,
  },
  request: {
    headers: {
    },
  },
  info: {
    selectionSetList: [],
    selectionSetGraphQL: '',
    parentTypeName: '',
    fieldName: '',
    variables: {
    },
  },
  prev: null,
  stash: {
  },
};

export const mockedPromotionalEvent: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
  arguments: {
    id: '4',
  },
  ...appsyncResolverProperties,
};

export const mockedRegularEvent: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
  arguments: {
    id: '1',
  },
  ...appsyncResolverProperties,
};

export const mockedInvalidId: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle> = {
  arguments: {
    id: '100',
  },
  ...appsyncResolverProperties,
};
