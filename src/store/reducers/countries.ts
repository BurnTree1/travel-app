import _ from 'lodash';
import {
  FETCH_COUNTRIES,
  FILTER_COUNTRIES,
  FETCH_COUNTRY,
  FETCH_COUNTRIES_STARTED,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRY_STARTED,
  FETCH_COUNTRY_ERROR,
  UPDATE_SIGHT_SCORE,
} from 'Actions';
import { countriesType, IReduxStateCountries } from 'Types';

const initialState: IReduxStateCountries = {
  countries: [] as Array<countriesType>,
  foundCountries: [] as Array<countriesType>,
  country: {} as countriesType,
  countryLoading: true,
  countriesLoading: true,
};

type InitialState = typeof initialState;

const handlers = {
  [FETCH_COUNTRIES]: (state, { countries }) => ({
    ...state,
    countries,
    countriesLoading: false,
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
  [FETCH_COUNTRIES_STARTED]: (state) => ({
    ...state,
    countriesLoading: true,
  }),
  [FETCH_COUNTRIES_ERROR]: (state, { error }) => ({
    ...state,
    loading: false,
    countriesError: error,
  }),
  [FETCH_COUNTRY]: (state, { country }) => ({
    ...state,
    country,
    countryLoading: false,
  }),
  [FETCH_COUNTRY_STARTED]: (state) => ({
    ...state,
    countryLoading: true,
  }),
  [FETCH_COUNTRY_ERROR]: (state, { error }) => ({
    ...state,
    loading: false,
    countryError: error,
  }),
  [UPDATE_SIGHT_SCORE]: (state, { country }) => ({
    ...state,
    country,
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
