import { widgetsAPI } from '../../api/widgetsAPI';

export const FETCH_WEATHER = 'WEATHER/FETCH';
export const FETCH_CURRENCY = 'CURRENCY/FETCH';

type fetchWeatherType = {
  type: typeof FETCH_WEATHER
  payload: { weather: string }
};
export const fetchWeather = (weather: any): fetchWeatherType => ({
  type: FETCH_WEATHER,
  payload: { weather },
});

type fetchCurrencyType = {
  type: typeof FETCH_CURRENCY
  payload: { rates, money }
};
export const fetchCurrency = (rates, money): fetchCurrencyType => ({
  type: FETCH_CURRENCY,
  payload: { rates, money },
});

export const setWeather = (lat: number, lon: number, lang: string) => async (dispatch) => {
  const response = await widgetsAPI.getWeather(lat, lon, lang);
  dispatch(fetchWeather(response));
};

export const setCountryCurrency = (money: string) => async (dispatch) => {
  const response = await widgetsAPI.getCurrency();
  dispatch(fetchCurrency(response, money));
};
