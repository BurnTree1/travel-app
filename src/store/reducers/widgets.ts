import _ from 'lodash';
import { FETCH_CURRENCY, FETCH_WEATHER } from 'Actions';

const initialState = {
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

type InitialState = typeof initialState;

const handlers = {
  [FETCH_WEATHER]: (state, { weather }) => ({
    ...state,
    weather: {
      icon: weather.weather[0].icon,
      temp: weather.main.temp,
      desc: weather.weather[0].description,
    },
  }),
  [FETCH_CURRENCY]: (state, { rates, money }) => ({
    ...state,
    currencyExchange: { currencyCountry: rates.rates[money], eur: rates.rates.EUR, rub: rates.rates.RUB },
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
