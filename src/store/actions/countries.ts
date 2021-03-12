import { countriesType } from 'Types';
import { countriesAPI } from '../../api/api';

export const FETCH_COUNTRIES = 'COUNTRIES/FETCH';
export const FETCH_COUNTRY = 'COUNTRY/FETCH';
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

type fetchCountryType = {
  type: typeof FETCH_COUNTRY
  payload: { country: countriesType }
};
export const fetchCountry = (country: countriesType): fetchCountryType => ({
  type: FETCH_COUNTRY,
  payload: { country },
});

export const setCountries = () => async (dispatch) => {
  const response = await countriesAPI.getCountries();
  dispatch(fetchCountries(response));
};

export const setCountry = (iso: string, lang: string) => async (dispatch) => {
  const response = await countriesAPI.getCountry(iso, lang);
  dispatch(fetchCountry(response));
};
