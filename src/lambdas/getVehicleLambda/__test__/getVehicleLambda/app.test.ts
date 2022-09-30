import {
  mockedPromotionalEvent, mockedRegularEvent, mockedInvalidId,
} from './mocks';
import handler from '../../app';

describe('getVehicleLambda', () => {
  describe('handler', () => {
    it('Should return list of vehicles if id is not promotional', async () => {
      const result = await handler(mockedRegularEvent);

      expect(result.id).toEqual(mockedRegularEvent.arguments.id);
    });

    it('Should return promotional vehicle if id is equal to 4', async () => {
      const result = await handler(mockedPromotionalEvent);

      expect(result.category).toEqual('spaceship');
    });

    it('Should return null if vehicle id is invalid', async () => {
      try {
        await handler(mockedInvalidId);
        fail('Test should throw an error!');
      } catch (err: any) {
        expect(err.message).toEqual('Sorry. Vehicle not found!');
      }
    });
  });
});
