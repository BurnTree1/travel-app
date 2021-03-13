import _ from 'lodash';
import { INIT_USER } from 'Actions';

const initialState = {
  isAuth: false,
};

type InitialState = typeof initialState;

const handlers = {
  [INIT_USER]: (state, { user }) => ({
    ...user,
    isAuth: true,
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
