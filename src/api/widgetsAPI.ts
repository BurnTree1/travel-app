import axios from 'axios';

export const widgetsAPI = {
  getWeather(city: string, lang: string) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1918bf33c5a701dd09efead1a6374b9a&lang=${lang}`)
      .then((response) => response.data);
  },
  getCurrency() {
    return axios.get('https://openexchangerates.org/api/latest.json?app_id=7339c6e7b31545c88c6a523cab2cdd24')
      .then((response) => response.data);
  },
};
