export const FETCH_COUNTRIES = 'COUNTRIES/FETCH';

type fetchCountriesType = {
  type: typeof FETCH_COUNTRIES
}
export const fetchCountries = (): fetchCountriesType => ({
  type: FETCH_COUNTRIES,
});
