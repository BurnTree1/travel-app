import { countriesType } from '../../types/types';

export const FETCH_COUNTRIES = 'COUNTRIES/FETCH';
export const FILTER_COUNTRIES = 'COUNTRIES/FILTER';

type fetchCountriesType = {
  type: typeof FETCH_COUNTRIES
  payload: { countries: Array<countriesType> }
};
export const fetchCountries = (countries: Array<countriesType>): fetchCountriesType => ({
  type: FETCH_COUNTRIES,
  payload: { countries },
});

type filterCountriesType = {
  type: typeof FILTER_COUNTRIES
  payload: { searchText: string }
};
export const filterCountries = (searchText: string): filterCountriesType => ({
  type: FILTER_COUNTRIES,
  payload: { searchText },
});
