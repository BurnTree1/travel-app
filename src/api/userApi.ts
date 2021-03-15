import axios from 'axios';

const USER_API = '/api/user';

export const userApi = {
  get() {
    return axios({
      url: `${USER_API}`,
      method: 'GET',
      withCredentials: true,
    })
      .then((response) => response.data);
  },
  logout() {
    return axios({
      url: `${USER_API}/logout`,
      method: 'GET',
      withCredentials: true,
    });
  },
  signIn(login: string, password: string) {
    return axios({
      url: `${USER_API}/signIn`,
      method: 'POST',
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
};
