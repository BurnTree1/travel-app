import { userApi } from 'Api';

export const INIT_USER = 'USER/INIT';
export const LOGOUT = 'USER/LOGOUT';

type actionType = {
  type: string,
  payload?: object
};

export const initUser = (user: object): actionType => ({
  type: INIT_USER,
  payload: { user },
});

export const fetchUser = () => (dispatch) => {
  userApi.get()
    .then((user) => dispatch(initUser(user)));
};

export const logout = () => ({ type: LOGOUT });
