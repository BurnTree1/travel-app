import _ from 'lodash';
import { IReduxStateAdmin } from 'Types';
import { COUNTRY_DELETED } from '../actions/admin';

const initialState: IReduxStateAdmin = {
  deletedCountryId: 0,
};

type InitialState = typeof initialState;

const handlers = {
  [COUNTRY_DELETED]: (state, { id }) => ({
    ...state,
    deletedCountryId: id,
  }),
};

export default (state = initialState, { type, payload }): InitialState => _.get(handlers, type, () => state)(state, payload);
