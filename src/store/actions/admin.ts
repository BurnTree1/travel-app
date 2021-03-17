import { customCountryType, customSightType } from 'Types';
import { adminAPI } from '../../api/adminAPI';

export const COUNTRY_DELETED = 'COUNTRY/DELETED';

type countryDeletedType = {
  type: typeof COUNTRY_DELETED
  payload: { id: number }
};

const countryDeleted = (id: number): countryDeletedType => ({
  type: COUNTRY_DELETED,
  payload: { id },
});

export const addCountry = (country: customCountryType) => () => {
  adminAPI.addNewCountry(country);
};

export const addSight = (sight: customSightType) => () => {
  adminAPI.addNewSight(sight);
};

export const deleteCountry = (id: number) => (dispatch) => {
  adminAPI.deleteNewCountry(id)
    .then(() => dispatch(countryDeleted(id)));
};
