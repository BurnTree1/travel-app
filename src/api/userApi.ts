// const API = 'https://peaceful-earth-11439.herokuapp.com';
import axios from 'axios';

const API = 'http://localhost:5000';

export const userApi = {
  get() {
    return axios.get(`${API}/user`)
      .then((response) => response.data);
  },
  signIn(login: string, password: string) {
    return axios({
      url: `${API}/user/signIn`,
      method: 'POST',
      data: { login, password },
    })
      .then((response) => response.data);
  },
  signUp(login: string, password: string, image: any) {
    return axios({
      url: `${API}/user/signUp`,
      method: 'POST',
      data: { login, password, image },
    })
      .then((response) => response.data);
  },
};
