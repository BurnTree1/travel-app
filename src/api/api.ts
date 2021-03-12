import axios from 'axios';

export const countriesAPI = {
  getCountries() {
    return axios.get('https://peaceful-earth-11439.herokuapp.com/countries')
      .then((response) => response.data);
  },
};
