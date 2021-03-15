import widgets from './widgets';
import { fetchWeather } from '../actions/widgets';

test('set weather', () => {
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
  const newState = widgets(state, fetchWeather({
    main: { temp: 20 },
    weather: [{ icon: 'icon', description: 'desc' }],
  }));
  expect(newState.weather.temp).toBe(20);
  expect(newState.weather.icon).toBe('icon');
  expect(newState.weather.desc).toBe('desc');
});
