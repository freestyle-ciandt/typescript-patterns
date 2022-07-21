import { AppSyncResolverHandler } from 'aws-lambda';
import { Vehicle, QueryGetVehiclesArgs } from '../appsync';

export const handler: AppSyncResolverHandler<
  QueryGetVehiclesArgs,
  Vehicle
> = async (event) => {
  const vehicles: Vehicle[] = [
    {
    id: '1',
    category: 'car',
    seats: 5,
    publishedAt: '1658468453'
  },
  {
    id: '2',
    category: 'motorcycle',
    seats: 1,
    publishedAt: '1658444723'
  },
  {
    id: '3',
    category: 'boat',
    seats: 3,
    publishedAt: '1658456533'
  }];

  const vehicle = vehicles.find((vehicle: Vehicle) => vehicle.id === event.arguments.id);
  if (vehicle) {
    return vehicle;
  }
  throw new Error('Not Found');
};
