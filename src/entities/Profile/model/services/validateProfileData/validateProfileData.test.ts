import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValiateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'test',
    first: 'test',
    city: 'Moscow',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValiateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValiateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValiateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValiateProfileError.INCORRECT_USER_DATA,
            ValiateProfileError.INCORRECT_AGE,
            ValiateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
