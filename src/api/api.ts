import axios from 'axios';
import { countriesType } from '../types/types';

export const countriesAPI = {
  getCountries(lang: string) {
    return axios.get<Array<countriesType>>(`https://peaceful-earth-11439.herokuapp.com/countries?lang=${lang}`)
      .then((response) => response.data);
  },
  getCountry(iso: string, lang: string) {
    return axios.get<countriesType>(`https://peaceful-earth-11439.herokuapp.com/countries/${iso}?lang=${lang}`)
      .then((response) => response.data);
  },
};
