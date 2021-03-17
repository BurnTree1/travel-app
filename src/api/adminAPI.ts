import axios from 'axios';
import { customCountryType, customSightType } from 'Types';

const COUNTRY_ADD = 'https://peaceful-earth-11439.herokuapp.com/countries/add';
const SIGHTS_ADD = 'https://peaceful-earth-11439.herokuapp.com/sights/add';
const COUNTRY_DELETE = 'https://peaceful-earth-11439.herokuapp.com/countries';

export const adminAPI = {
  addNewCountry(country: customCountryType) {
    return axios({
      url: `${COUNTRY_ADD}`,
      data: country,
      method: 'POST',
      withCredentials: true,
    })
      .then((response) => response.data);
  },
  addNewSight(sight: customSightType) {
    return axios({
      url: `${SIGHTS_ADD}`,
      data: sight,
      method: 'POST',
      withCredentials: true,
    })
      .then((response) => response.data);
  },
  deleteNewCountry(id: number) {
    return axios({
      url: `${COUNTRY_DELETE}/${id}`,
      method: 'DELETE',
      withCredentials: true,
    })
      .then((response) => response.data);
  },
};
