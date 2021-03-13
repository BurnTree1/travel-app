import { userApi } from 'Api';

export const INIT_USER = 'USER/INIT';

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
