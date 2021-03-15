import { countriesType } from 'Types';
import countries from './countries';
import { fetchCountries } from '../actions/countries';

test('receive countries', () => {
  const state = {
    countries: [] as Array<countriesType>,
    foundCountries: [] as Array<countriesType>,
    country: {} as countriesType,
    countryLoading: true,
    countriesLoading: true,
  };
  const newState = countries(state, fetchCountries(
    [{
      id: 1,
      name: 'string',
      capital: 'string',
      description: 'string',
      mapPoint: 0,
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
