import _ from 'lodash';
import { FETCH_COUNTRIES, FILTER_COUNTRIES } from 'Actions';
import { countriesType } from '../../types/types';

const initialState = {
  countries: [
    {
      id: 1, name: 'France', capital: 'Paris', rating: 5, iso: 'fr',
    },
    {
      id: 2, name: 'Italy', capital: 'Rome', rating: 5, iso: 'it',
    },
    {
      id: 3, name: 'France', capital: 'Paris', rating: 5, iso: 'fr',
    },
    {
      id: 4, name: 'Italy', capital: 'Rome', rating: 5, iso: 'it',
    },
    {
      id: 5, name: 'France', capital: 'Paris', rating: 5, iso: 'fr',
    },
    {
      id: 6, name: 'France', capital: 'Paris', rating: 5, iso: 'fr',
    },
    {
      id: 7, name: 'France', capital: 'Paris', rating: 5, iso: 'fr',
    },
    {
      id: 8, name: 'France', capital: 'Paris', rating: 5, iso: 'fr',
    },
  ] as Array<countriesType>,
  foundCountries: [] as Array<countriesType>,
};

type InitialState = typeof initialState;

const handlers = {
  [FETCH_COUNTRIES]: (state) => ({
    ...state,
  }),
  [FILTER_COUNTRIES]: (state, { searchText }) => ({
    ...state,
    foundCountries: [...state.countries.filter((country) => {
      const indexCountry = country.name.toLowerCase().indexOf(searchText.toLowerCase());
      const indexCapital = country.capital.toLowerCase().indexOf(searchText.toLowerCase());
      if (indexCountry >= 0 || indexCapital >= 0) {
        return country;
      }
    })],
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
