import _ from 'lodash';
import {
  FETCH_COUNTRIES,
  FILTER_COUNTRIES,
  FETCH_COUNTRY,
  FETCH_COUNTRY_STARTED,
  FETCH_COUNTRY_ERROR,
} from 'Actions';
import { countriesType, IReduxStateCountries } from 'Types';

const initialState: IReduxStateCountries = {
  countries: [] as Array<countriesType>,
  foundCountries: [] as Array<countriesType>,
  country: {} as countriesType,
  loading: true,
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
  [FETCH_COUNTRY_STARTED]: (state) => ({
    ...state,
    loading: true,
  }),
  [FETCH_COUNTRY_ERROR]: (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }),
  [FETCH_COUNTRY]: (state, { country }) => ({
    ...state,
    country,
    loading: false,
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
