export const FETCH_COUNTRIES = 'COUNTRIES/FETCH';
export const FILTER_COUNTRIES = 'COUNTRIES/FILTER';

type fetchCountriesType = {
  type: typeof FETCH_COUNTRIES
};
export const fetchCountries = (): fetchCountriesType => ({
  type: FETCH_COUNTRIES,
});

type filterCountriesType = {
  type: typeof FILTER_COUNTRIES
  payload: { searchText: string }
};
export const filterCountries = (searchText: string): filterCountriesType => ({
  type: FILTER_COUNTRIES,
  payload: { searchText },
});
