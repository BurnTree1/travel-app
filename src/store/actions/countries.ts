import { countriesType } from 'Types';
import { countriesAPI } from '../../api/api';

export const FETCH_COUNTRIES = 'COUNTRIES/FETCH';
export const FETCH_COUNTRY = 'COUNTRY/FETCH';
export const FILTER_COUNTRIES = 'COUNTRIES/FILTER';

export const FETCH_COUNTRIES_STARTED = 'COUNTRIES/FETCH_COUNTRIES_STARTED';
export const FETCH_COUNTRIES_ERROR = 'COUNTRIES/FETCH_COUNTRIES_ERROR';
export const FETCH_COUNTRY_STARTED = 'COUNTRIES/FETCH_COUNTRY_STARTED';
export const FETCH_COUNTRY_ERROR = 'COUNTRIES/FETCH_COUNTRY_ERROR';

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

type errorFetchCountriesType = {
  type: typeof FETCH_COUNTRIES_ERROR
  payload: { error: Error },
};

export const errorFetchCountries = (error: Error): errorFetchCountriesType => ({
  type: FETCH_COUNTRIES_ERROR,
  payload: { error },
});

type startFetchCountriesType = {
  type: typeof FETCH_COUNTRIES_STARTED
};

export const startFetchCountries = (): startFetchCountriesType => ({
  type: FETCH_COUNTRIES_STARTED,
});

type fetchCountryType = {
  type: typeof FETCH_COUNTRY
  payload: { country: countriesType }
};
export const fetchCountry = (country: countriesType): fetchCountryType => ({
  type: FETCH_COUNTRY,
  payload: { country },
});

export const setCountries = (lang: string) => async (dispatch) => {
  dispatch(startFetchCountries());
  try {
    const response = await countriesAPI.getCountries(lang);
    dispatch(fetchCountries(response));
  } catch (e) {
    dispatch(errorFetchCountries(e));
  }
};

type errorFetchType = {
  type: typeof FETCH_COUNTRY_ERROR
  payload: { error: Error },
};

export const errorFetchCountry = (error: Error): errorFetchType => ({
  type: FETCH_COUNTRY_ERROR,
  payload: { error },
});

type startFetchCountryType = {
  type: typeof FETCH_COUNTRY_STARTED
};

export const startFetchCountry = (): startFetchCountryType => ({
  type: FETCH_COUNTRY_STARTED,
});

export const setCountry = (iso: string, lang: string) => async (dispatch) => {
  dispatch(startFetchCountry());
  try {
    const response = await countriesAPI.getCountry(iso, lang);
    dispatch(fetchCountry(response));
  } catch (e) {
    dispatch(errorFetchCountry(e));
  }
};
