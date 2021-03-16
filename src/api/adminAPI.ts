import axios from 'axios';
import { customCountryType } from 'Types';

const COUNTRY_ADD = '/api/countries/add';
const COUNTRY_DELETE = '/api/countries';

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
  deleteNewCountry(id: number) {
    return axios({
      url: `${COUNTRY_DELETE}/${id}`,
      method: 'DELETE',
      withCredentials: true,
    })
      .then((response) => response.data);
  },
};
