import { countriesType } from 'Types';
import countries from './countries';
import {
  fetchCountries,
  fetchCountry,
  filterCountries, startFetchCountries,
  startFetchCountry,
} from '../actions/countries';

const state = {
  countries: [{
    id: 1,
    name: 'string',
    capital: 'London',
    description: 'string',
    mapPoint: {
        coordinates: [1, 1]
    },
    imageUrl: 'string',
    videoUrl: 'string',
    flagImageUrl: 'string',
    currency: 'string',
    ISO: 'string',
    sights: [],
    timeZone: 'string',
  }] as Array<countriesType>,
  foundCountries: [] as Array<countriesType>,
  country: {} as countriesType,
  countryLoading: false,
  countriesLoading: false,
};

test('receive countries', () => {
  const newState = countries(state, fetchCountries(
    [{
      id: 1,
      name: 'string',
      capital: 'string',
      description: 'string',
        mapPoint: {
            coordinates: [1, 1]
        },
      imageUrl: 'string',
      videoUrl: 'string',
      flagImageUrl: 'string',
      currency: 'string',
      ISO: 'string',
      sights: [],
      timeZone: 'string',
    }],
  ));
  expect(newState.countries[0]).toBeTruthy();
});

test('set country', () => {
  const newState = countries(state, fetchCountry(
    {
      id: 1,
      name: 'string',
      capital: 'string',
      description: 'string',
        mapPoint: {
            coordinates: [1, 1]
        },
      imageUrl: 'string',
      videoUrl: 'string',
      flagImageUrl: 'string',
      currency: 'string',
      ISO: 'string',
      sights: [],
      timeZone: 'string',
    },
  ));
  expect(newState.country.id).toBe(1);
});

test('find country', () => {
  const newTrueState = countries(state, filterCountries('London'));
  expect(newTrueState.foundCountries[0]).toBeTruthy();
  const newFalseState = countries(state, filterCountries('Akapulko'));
  expect(newFalseState.foundCountries[0]).toBeFalsy();
});

test('loader for country', () => {
  // @ts-ignore
  const newState = countries(state, startFetchCountry());
  expect(newState.countryLoading).toBe(true);
});

test('loader for countries', () => {
  // @ts-ignore
  const newState = countries(state, startFetchCountries());
  expect(newState.countriesLoading).toBe(true);
});
