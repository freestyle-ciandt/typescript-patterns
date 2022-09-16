import { AppSyncResolverEvent } from 'aws-lambda';
import { Vehicle, QueryGetVehicleArgs } from 'typescript-patterns/appsync';

const REGULAR_VEHICLES: Vehicle[] = [
  {
    id: '1',
    category: 'car',
    seats: 5,
    publishedAt: 1658468453,
    available: true,
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

const PROMOTIONAL_VEHICLE_ID = '4';
const PROMOTIONAL_VEHICLE: Vehicle = {
  id: PROMOTIONAL_VEHICLE_ID,
  category: 'spaceship',
  seats: 20,
  publishedAt: 1659646128,
  available: true,
};

const isPromotionalVehicle = (id: string): boolean => id === PROMOTIONAL_VEHICLE_ID;

const getPromotionalVehicle = (): Vehicle => PROMOTIONAL_VEHICLE;

const getRegularVehicle = (id: string): Vehicle | null => {
  let i = 0;
  let vehicle = REGULAR_VEHICLES[i];
  do {
    if (vehicle.id === id) return vehicle;
    i++;
  } while ((vehicle = REGULAR_VEHICLES[i]));
  return null;
};

export const handler = async (
  event: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle>,
): Promise<Vehicle> => {
  console.log(JSON.stringify(event));

  const { id } = event.arguments;

  if (isPromotionalVehicle(id)) {
    const vehicle = getPromotionalVehicle();
    return vehicle;
  }

  const vehicle = getRegularVehicle(id);
  if (vehicle) {
    return vehicle;
  }
  throw new Error('Sorry. Vehicle not found!');
};

export default {
  handler,
};
