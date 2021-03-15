import widgets from './widgets';
import {
  fetchCurrency,
  fetchWeather,
  setCountryCurrency,
} from '../actions/widgets';

const state = {
  weather: {
    icon: '',
    temp: '',
    desc: '',
  },
  currencyExchange: {
    currencyCountry: 1,
    eur: 1,
    rub: 1,
  },
};

test('set weather', () => {
  const newState = widgets(state, fetchWeather({
    main: { temp: 20 },
    weather: [{ icon: 'icon', description: 'desc' }],
  }));
  expect(newState.weather.temp).toBe(20);
  expect(newState.weather.icon).toBe('icon');
  expect(newState.weather.desc).toBe('desc');
});

test('set currency', () => {
  const newState = widgets(state, fetchCurrency({
    rates: {
      USD: 2,
    },
  }, 'USD'));
  expect(newState.currencyExchange.currencyCountry).toBe(2);
});

test('set currency', () => {
  // @ts-ignore
  const newState = widgets(state, setCountryCurrency('USD'));
  expect(newState.currencyExchange.currencyCountry).toBe(1);
});
