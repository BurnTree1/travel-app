import axios from 'axios';
import { countriesType } from 'Types';

const COUNTRIES_API = '/api/countries';

export const countriesAPI = {
  getCountries(lang: string) {
    return axios.get<Array<countriesType>>(`${COUNTRIES_API}?lang=${lang}`)
      .then((response) => response.data);
  },
  getCountry(iso: string, lang: string) {
    return axios.get<countriesType>(`${COUNTRIES_API}/${iso}?lang=${lang}`)
      .then((response) => response.data);
  },
};
