export const FETCH_COUNTRIES = 'COUNTRIES/FETCH';

export const fetchCountries = (countries) => ({
  type: FETCH_COUNTRIES,
  payload: { countries },
});
