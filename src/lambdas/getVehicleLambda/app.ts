import { AppSyncResolverEvent } from 'aws-lambda';
import { Vehicle, QueryGetVehicleArgs } from '../../../appsync';

export const handler = async (event: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle>): Promise<Vehicle> => {
  console.log(JSON.stringify(event));
  const vehicles: Vehicle[] = [
    {
    id: '1',
    category: 'car',
    seats: 5,
    publishedAt: 1658468453,
    available: true
  },
  {
    id: '2',
    category: 'motorcycle',
    seats: 2,
    publishedAt: 1658444723,
    available: false,
  },
  {
    id: '3',
    category: 'boat',
    seats: 3,
    publishedAt: 1658456533,
    available: true,
  }];

  const vehicle = vehicles.find((vehicle: Vehicle) => vehicle.id === event.arguments.id);
  if (vehicle) {
    return vehicle
  }
  throw new Error('Sorry. Vehicle not found!')
};
