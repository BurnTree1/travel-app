import _ from 'lodash';
import { FETCH_COUNTRIES, FILTER_COUNTRIES } from 'Actions';
import { countriesType } from '../../types/types';
import { countriesAPI } from '../../api/api';
import {
  FETCH_COUNTRY,
  fetchCountries,
  fetchCountry,
} from '../actions/countries';

const initialState = {
  countries: [] as Array<countriesType>,
  foundCountries: [] as Array<countriesType>,
  country: {} as countriesType,
};

type InitialState = typeof initialState;

const handlers = {
  [FETCH_COUNTRIES]: (state, { countries }) => ({
    ...state,
    countries,
  }),
  [FILTER_COUNTRIES]: (state, { searchText }) => ({
    ...state,
    foundCountries: [...state.countries.filter((country) => {
      const indexCountry = country.name.toLowerCase().indexOf(searchText.toLowerCase());
      const indexCapital = country.capital.toLowerCase().indexOf(searchText.toLowerCase());
      if (indexCountry >= 0 || indexCapital >= 0) {
        return country;
      }
      if (indexCountry < 0 && indexCapital < 0) {
        return false;
      }
      return false;
    })],
  }),
  [FETCH_COUNTRY]: (state, { country }) => ({
    ...state,
    country,
  }),
};

export const setCountries = (lang: string) => async (dispatch) => {
  const response = await countriesAPI.getCountries(lang);
  dispatch(fetchCountries(response));
};

export const setCountry = (iso: string, lang: string) => async (dispatch) => {
  const response = await countriesAPI.getCountry(iso, lang);
  dispatch(fetchCountry(response));
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
