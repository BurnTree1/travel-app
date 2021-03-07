import _ from 'lodash';
import { FETCH_COUNTRIES } from 'Actions';
import {countriesType} from "../../types/types";

const initialState = {
  countries: [
    {id: 1, name: 'France', capital: 'Paris', rating: 5},
    {id: 2, name: 'France', capital: 'Paris', rating: 5},
    {id: 3, name: 'France', capital: 'Paris', rating: 5},
    {id: 4, name: 'France', capital: 'Paris', rating: 5},
    {id: 5, name: 'France', capital: 'Paris', rating: 5},
    {id: 6, name: 'France', capital: 'Paris', rating: 5},
    {id: 7, name: 'France', capital: 'Paris', rating: 5},
    {id: 8, name: 'France', capital: 'Paris', rating: 5},
  ] as Array<countriesType>,
};

type InitialState = typeof initialState

const handlers = {
  [FETCH_COUNTRIES]: (state) => ({
    ...state,
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
