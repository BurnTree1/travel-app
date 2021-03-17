import axios from 'axios';
import { AUTH_TOKEN_NAME } from '../helpers/constants';

const USER_API = 'https://peaceful-earth-11439.herokuapp.com/user';

export const userApi = {
  get() {
    return axios({
      url: `${USER_API}`,
      method: 'GET',
      headers: { Authorization: localStorage.getItem(AUTH_TOKEN_NAME) },
      withCredentials: true,
    })
      .then((response) => response.data);
  },
  signIn(login: string, password: string) {
    return axios({
      url: `${USER_API}/signIn`,
      method: 'POST',
      headers: { Authorization: localStorage.getItem(AUTH_TOKEN_NAME) },
      withCredentials: true,
      data: { login, password },
    });
  },
  signUp(login: string, password: string, image: any) {
    const formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);
    formData.append('image', image);
    return axios({
      url: `${USER_API}/signUp`,
      method: 'POST',
      withCredentials: true,
      data: formData,
    })
      .then((response) => response.data);
  },
  score(score: number, sightId: string) {
    const body: { score: number, id: string } = { score: 0, id: '' };
    body.score = score;
    body.id = sightId;

    return axios({
      url: `${USER_API}/score`,
      method: 'POST',
      withCredentials: true,
      data: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(AUTH_TOKEN_NAME),
      },
    })
      .then((response) => response.data);
  },
};
