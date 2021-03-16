import _ from 'lodash';
import { CHANGE_LANGUAGE } from '../actions/language';

const initialState = {
  lang: 'en',
};

type InitialState = typeof initialState;

const handlers = {
  [CHANGE_LANGUAGE]: (state: InitialState, { lang }) => ({
    ...state,
    lang,
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
