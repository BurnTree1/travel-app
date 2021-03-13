import { countriesType } from 'Types';
import { countriesAPI } from '../../api/countriesAPI';

export const FETCH_COUNTRIES = 'COUNTRIES/FETCH';
export const FETCH_COUNTRY = 'COUNTRY/FETCH';
export const FILTER_COUNTRIES = 'COUNTRIES/FILTER';

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

type fetchCountryType = {
  type: typeof FETCH_COUNTRY
  payload: { country: countriesType }
};
export const fetchCountry = (country: countriesType): fetchCountryType => ({
  type: FETCH_COUNTRY,
  payload: { country },
});

export const setCountries = (lang: string) => async (dispatch) => {
  const response = await countriesAPI.getCountries(lang);
  dispatch(fetchCountries(response));
};

type startFetchCountryType = {
  type: typeof FETCH_COUNTRY_STARTED
};

export const startFetchCountry = (): startFetchCountryType => ({
  type: FETCH_COUNTRY_STARTED,
});

type errorFetchType = {
  type: typeof FETCH_COUNTRY_ERROR
  payload: { error: Error },
};

export const errorFetch = (error: Error): errorFetchType => ({
  type: FETCH_COUNTRY_ERROR,
  payload: { error },
});

export const setCountry = (iso: string, lang: string) => async (dispatch) => {
  dispatch(startFetchCountry());
  try {
    const response = await countriesAPI.getCountry(iso, lang);
    dispatch(fetchCountry(response));
  } catch (e) {
    dispatch(errorFetch(e));
  }
};
