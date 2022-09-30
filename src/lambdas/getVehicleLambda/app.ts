import { AppSyncResolverEvent } from 'aws-lambda';
import { Vehicle, QueryGetVehicleArgs } from '../../../appsync';
import { getPromotionalVehicle, getRegularVehicle, isPromotionalVehicle } from './vehicleService';

const handler = async (
  event: AppSyncResolverEvent<QueryGetVehicleArgs, Vehicle>,
): Promise<Vehicle> => {
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

export default handler;
