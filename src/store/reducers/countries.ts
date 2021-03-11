import _ from 'lodash';
import {FETCH_COUNTRIES, FILTER_COUNTRIES} from 'Actions';
import {countriesType} from "../../types/types";
import {countriesAPI} from '../../api/api';
import {fetchCountries} from "../actions/countries";

const initialState = {
    countries: [] as Array<countriesType>,
    foundCountries: [] as Array<countriesType>,
};

type InitialState = typeof initialState

const handlers = {
    [FETCH_COUNTRIES]: (state, {countries}) => ({
        ...state,
        countries: countries
    }),
    [FILTER_COUNTRIES]: (state, {searchText}) => ({
        ...state,
        foundCountries: [...state.countries.filter(country => {
            let indexCountry = country.name.toLowerCase().indexOf(searchText.toLowerCase())
            let indexCapital = country.capital.toLowerCase().indexOf(searchText.toLowerCase())
            if (indexCountry >= 0 || indexCapital >= 0) {
                return country
            } else if (indexCountry < 0 && indexCapital < 0) {
                return false
            }
        })]
    })
}

export const setCountries = () => {
    return async (dispatch) => {
        const response = await countriesAPI.getCountries()
        dispatch(fetchCountries(response))
    }
}

export default (state = initialState, {type, payload}): InitialState => _.get(handlers, type, () => state)(state, payload);
