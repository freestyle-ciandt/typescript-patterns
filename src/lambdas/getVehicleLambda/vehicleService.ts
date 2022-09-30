import { Vehicle } from '../../../appsync';

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

export const isPromotionalVehicle = (id: string): boolean => id === PROMOTIONAL_VEHICLE_ID;

export const getPromotionalVehicle = (): Vehicle => PROMOTIONAL_VEHICLE;

export const getRegularVehicle = (id: string): Vehicle | null => {
  let i = 0;
  let vehicle = REGULAR_VEHICLES[i];
  do {
    if (vehicle.id === id) return vehicle;
    i++;
  } while ((vehicle = REGULAR_VEHICLES[i]));
  return null;
};
