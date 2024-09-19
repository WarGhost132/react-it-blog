import { Profile, ValiateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValiateProfileError.NO_DATA];
    }

    const {
        first,
        lastname,
        age,
        country,
    } = profile;

    const errors: ValiateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValiateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValiateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValiateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
