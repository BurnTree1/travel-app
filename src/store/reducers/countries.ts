import _ from 'lodash';
import { FETCH_COUNTRIES, FILTER_COUNTRIES } from 'Actions';
import { countriesType } from 'Types';

const initialState = {
  countries: [] as Array<countriesType>,
  foundCountries: [] as Array<countriesType>,
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
      } if (indexCountry < 0 && indexCapital < 0) {
        return false;
      }
      return false;
    })],
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
