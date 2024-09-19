import { StateSchema } from 'app/providers/StoreProvider';
import { ValiateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValiateProfileError.SERVER_ERROR,
                    ValiateProfileError.NO_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValiateProfileError.SERVER_ERROR,
            ValiateProfileError.NO_DATA,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
